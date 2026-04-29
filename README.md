# Afe Temidayo — Portfolio (Full-Stack)

A full-stack portfolio built with **React + Vite + TailwindCSS** (frontend) and **Express + Nodemailer** (backend).

---

## Project Structure

```
/                        ← Frontend (React + Vite)
  src/
    assets/              ← All images (keep yours here)
    components/
      NavBar.jsx
      Footer.jsx
    layout/
      DefaultLayout.jsx
    pages/
      LandingPage.jsx
      PortfolioPage.jsx
      Error.jsx
    App.jsx
    App.css
    main.jsx
    index.css
  index.html
  tailwind.config.js
  vite.config.js
  package.json           ← Frontend package.json

/server/                 ← (or same root if you keep server.js at root)
  server.js
  .env                   ← Copy .env.example → .env and fill in values
  package.json           ← Backend package.json
```

---

## Quick Start

### 1. Frontend

```bash
# Install dependencies
npm install

# Start dev server (port 5173)
npm run dev
```

### 2. Backend

```bash
cd server   # or wherever server.js lives

# Install dependencies
npm install

# Copy env template
cp .env.example .env
# → Open .env and fill in EMAIL_USER, EMAIL_PASS, RECEIVER_EMAIL

# Start dev server (port 3001)
npm run dev
```

> **Important:** The frontend Vite dev server proxies `/api/*` requests to `http://localhost:3001`.
> Both servers must be running during development.

---

## Gmail App Password Setup

1. Go to your Google Account → **Security**
2. Enable **2-Step Verification** (required)
3. Go to **App Passwords** → [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
4. Create a new app password, select **Mail** + **Other (Custom name)**
5. Copy the 16-character password → paste it as `EMAIL_PASS` in `.env`

---

## Production Build

```bash
# Build React app
npm run build          # outputs to /dist

# The Express server serves /dist in production automatically
# Start the server
node server.js
```

---

## Deployment Tips

- **Frontend + Backend together:** Deploy to **Railway**, **Render**, or **Fly.io** — they run Node.js servers.
- **Frontend only:** Deploy to **Vercel** or **Netlify** and point `CLIENT_ORIGIN` in `.env` to the URL; host the backend separately.

---

## Tech Stack

| Layer     | Tech                          |
| --------- | ----------------------------- |
| Frontend  | React 18, Vite, TailwindCSS 3 |
| Icons     | react-icons                   |
| Routing   | react-router-dom v6           |
| Scroll FX | scrollreveal                  |
| Toasts    | react-hot-toast               |
| Modals    | react-modal                   |
| Backend   | Node.js, Express 4            |
| Email     | Nodemailer + Gmail            |
| Env       | dotenv                        |
