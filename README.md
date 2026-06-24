# ScanShort

# LiveUrl: https://scanshot.vercel.app

A URL shortener that generates QR codes. stack — React on the front, Node/Express on the back, MongoDB for storage.

## What it does

- Shortens any URL
- Generates a QR code for every short link
- Copy or share the link directly from the app
- Tracks click count per link
- Works in different languages
- Dark/light mode

## Stack

**Frontend** — React, Vite, TailwindCSS, DaisyUI, React Router v6, react-i18next, Axios

**Backend** — Node.js, Express, MongoDB, Mongoose, nanoid

## Running locally

**Clone**

```bash
git clone https://github.com/Tochiiy/ScanShot_url_shortener.git
cd ScanShot_url_shortener
```

**Backend**

```bash
cd backend
npm install
```

Add `backend/.env`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
FRONTEND_URL=http://localhost:5173
```

```bash
npm run dev
```

**Frontend**

```bash
cd frontend
npm install
```

Add `frontend/.env`:

```
VITE_BACKEND_URL=http://localhost:5000
```

```bash
npm run dev
```

Runs at `http://localhost:5173`

## API

```
GET  /healthcheck     confirms API is running
POST /shorten         body: { originalUrl } → returns { shortUrl, shortId }
GET  /:shortId        redirects to original URL
```

## Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

## Known issues

- Render free tier spins down after inactivity — first request takes ~30s
- `navigator.share` only works on mobile or HTTPS

## Author

Tochukwu — [github.com/Tochiiy](https://github.com/Tochiiy)
