# FIFA World Cup 2026

A full-stack web app to browse and explore all qualifying nations for the **2026 FIFA World Cup**. Users can filter teams by confederation, view FIFA rankings, historical World Cup stats, and key players for each country.

## Live Demo

https://world-cup-livid.vercel.app

---

## Features

- Browse all 48 qualifying nations in a responsive grid
- Filter by confederation (UEFA, CONMEBOL, CONCACAF, CAF, AFC, OFC)
- Individual country detail pages with FIFA ranking, World Cup history, best finish, and key players
- Dark / light mode toggle with localStorage persistence
- Country flags via [flagcdn.com](https://flagcdn.com)

---

## Tech Stack

**Frontend**
- React 19 + TypeScript
- Vite
- React Router v7
- Tailwind CSS

**Backend**
- Node.js + Express 5
- TypeScript
- Supabase (PostgreSQL)

**Deployment**
- Docker (Node 20 Alpine)
- Railway

---

## Getting Started

### Prerequisites

- Node.js 20+
- A [Supabase](https://supabase.com) project with a `nations` table

### Environment Variables

Create a `.env` file in `server/`:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_KEY=your_service_key
PORT=4000
ALLOWED_ORIGINS=http://localhost:5173
```

Optionally, create a .env in the root for the frontend:

```
VITE_API_URL=http://localhost:4000
```
### Running Locally

Both processes must run concurrently.

Backend (port 4000):
```
cd server
npm install
npm run dev
```

Frontend (port 5173):
```
npm install
npm run dev
```

### API Endpoints
| Method | Endpoint              | Description                          |
|--------|-----------------------|--------------------------------------|
| GET    | /api/nations          | Returns all qualifying nations       |
| GET    | /api/nations/:code    | Returns a single nation by FIFA code |

### Deployment

The backend is containerized with Docker and deployed on Railway. The PORT environment variable is set automatically by Railway.
```
docker build -t world-cup-server .
docker run -p 4000:4000 world-cup-server
```
