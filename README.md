# Mini Vendor Catalog Manager

Live frontend: https://mini-vendor-catalog-rho.vercel.app/
Backend API base URL: https://mini-vendor-catalog-56xk.onrender.com/

## Project structure
- /frontend — React + Tailwind
- /backend — Node.js + Express + MongoDB (Mongoose)

## How to run locally
1. Start MongoDB Atlas and get connection string.
2. Backend:
   - `cd backend`
   - create `.env` with `MONGODB_URI=...`
   - `npm install`
   - `npm run dev`
3. Frontend:
   - `cd frontend`
   - `npm install`
   - create `.env` with `REACT_APP_API_URL=http://localhost:5000`
   - `npm start`

## API endpoints
- GET `/api/products` — fetch all products
- POST `/api/products` — add product `{ name, description, price }`
- DELETE `/api/products/:id` — delete product

## Notes for deploy
- Backend must have env var `MONGODB_URI`.
- Frontend must have `REACT_APP_API_URL` pointing to deployed backend.

