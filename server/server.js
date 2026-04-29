const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3001",
  process.env.CLIENT_ORIGIN,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      cb(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST"],
    credentials: true,
  }),
);

app.use(express.json({ limit: "10kb" }));

app.use(express.static(path.join(__dirname, "dist")));

const sanitise = (str = "") =>
  String(str)
    .replace(/<[^>]*>/g, "")
    .trim()
    .slice(0, 2000);
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.post("/api/contact", async (req, res) => {
  const name = sanitise(req.body.name);
  const email = sanitise(req.body.email);
  const message = sanitise(req.body.message);

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    if (process.env.NODE_ENV !== "production") {
      await transporter.verify();
    }

    const notificationMail = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `📬 New message from ${name} — Portfolio`,
      text: `Name:    ${name}\nEmail:   ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#07010f;color:#f0eaff;border-radius:16px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#6d28d9,#0ea5e9);padding:32px;text-align:center;">
            <h1 style="margin:0;font-size:24px;color:#fff;">New Portfolio Message</h1>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #2e1065;color:#c084fc;font-size:12px;text-transform:uppercase;letter-spacing:2px;width:100px;">Name</td>
                <td style="padding:12px 0;border-bottom:1px solid #2e1065;color:#f0eaff;">${name}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #2e1065;color:#c084fc;font-size:12px;text-transform:uppercase;letter-spacing:2px;">Email</td>
                <td style="padding:12px 0;border-bottom:1px solid #2e1065;">
                  <a href="mailto:${email}" style="color:#0ea5e9;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;color:#c084fc;font-size:12px;text-transform:uppercase;letter-spacing:2px;vertical-align:top;">Message</td>
                <td style="padding:12px 0;color:#f0eaff;line-height:1.6;">${message.replace(/\n/g, "<br/>")}</td>
              </tr>
            </table>
            <div style="margin-top:32px;text-align:center;">
              <a href="mailto:${email}" style="background:linear-gradient(135deg,#6d28d9,#0ea5e9);color:#fff;text-decoration:none;padding:12px 28px;border-radius:50px;font-weight:bold;display:inline-block;">
                Reply to ${name}
              </a>
            </div>
          </div>
          <div style="padding:16px 32px;text-align:center;font-size:11px;color:#6b7280;">
            Sent from your portfolio contact form • ${new Date().toUTCString()}
          </div>
        </div>
      `,
    };

    const autoReplyMail = {
      from: `"Afe Temidayo" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}! 👋`,
      text: `Hi ${name},\n\nThank you for getting in touch! I've received your message and will get back to you as soon as possible.\n\nBest,\nAfe Temidayo\nFull-Stack Developer`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#07010f;color:#f0eaff;border-radius:16px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#6d28d9,#0ea5e9);padding:32px;text-align:center;">
            <h1 style="margin:0;font-size:24px;color:#fff;">Message Received! 🎉</h1>
          </div>
          <div style="padding:32px;line-height:1.7;">
            <p>Hi <strong>${name}</strong>,</p>
            <p>Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible — usually within 24 hours.</p>
            <p>In the meantime, feel free to check out my work:</p>
            <div style="text-align:center;margin:24px 0;">
              <a href="https://github.com/afeDayo" style="background:linear-gradient(135deg,#6d28d9,#0ea5e9);color:#fff;text-decoration:none;padding:12px 28px;border-radius:50px;font-weight:bold;display:inline-block;">
                View My GitHub
              </a>
            </div>
            <p style="color:#9ca3af;font-size:13px;">Best regards,<br/><strong style="color:#f0eaff;">Afe Temidayo</strong><br/>Full-Stack Developer</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(notificationMail);
    await transporter.sendMail(autoReplyMail);

    return res.status(200).json({ success: "Message sent successfully." });
  } catch (error) {
    console.error("Email error:", error);
    return res
      .status(500)
      .json({ error: "Failed to send message. Please try again." });
  }
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅  Server running on port ${PORT}`);
  console.log(`📧  Notifications → ${process.env.RECEIVER_EMAIL}`);
});
