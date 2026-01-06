# Ecommerce Starter

This repository contains a minimal scaffold for:
- Frontend: React + Vite
- Backend: FastAPI
- Auth/DB: Supabase (cloud)

Quick start

1. Backend

- Create `backend/.env` from `backend/.env.example` and set `SUPABASE_URL` and `SUPABASE_KEY`.
- Install and run:

```powershell
cd backend
python -m venv .venv
. .venv/Scripts/Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

2. Frontend

- Create `frontend/.env` from `frontend/.env.example` and set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
- Install and run:

```powershell
cd frontend
npm install
npm run dev
```

Notes
- The frontend uses `VITE_API_BASE_URL` to call the backend (defaults to `http://localhost:8000`).
- Configure Supabase project and copy keys from the Supabase dashboard.
