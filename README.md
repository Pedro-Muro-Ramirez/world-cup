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
