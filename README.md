🍽️ Poodi – Full-Stack Food Ordering App

Foodi is a modern full-stack food ordering application built with React on the frontend and FastAPI on the backend, using a cloud-hosted PostgreSQL database (Neon).
The goal of this project is to build a clean, scalable, production-style app — not just a demo.

🧱 Tech Stack
Frontend

React (Vite)

React Router

Redux Toolkit

Fetch API

CSS (page-scoped, component-friendly)

Lazy loading with React.lazy + Suspense

Backend(https://github.com/Rossie2141/foddie-resApp-backend)

FastAPI

SQLAlchemy

Pydantic

PostgreSQL (Neon – free cloud DB)

Deployed on Vercel
☁️ Database (Neon)

Cloud-hosted PostgreSQL

Free tier

No local DB required

Tables are created automatically via SQLAlchemy

Seed data inserted via scripts
🧠 Key Design Decisions

No inline styles for complex pages

One CSS file per page

No hooks inside loops (React rules respected)

Lazy loading for routes

Backend owns all data

Frontend only consumes APIs

🛠️ Current Features

Menu page with categorized dishes

Horizontal scroll with arrow controls

Cart UI built from real HTML → JSX

Order summary with promo layout

Backend-driven menu data

Cloud database integration

🔜 Planned Enhancements

Cart state with Redux

Quantity update logic

Checkout flow

Auth (JWT)

Orders table

Payment integration (Stripe)

Admin dashboard
