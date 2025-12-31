# Deployment Guide

## Frontend (GitHub Pages)

### Setup GitHub Secrets

1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Add new repository secret:
   - Name: `VITE_API_BASE_URL`
   - Value: `https://your-backend-domain.com/api`

### Deploy

Push to `main` branch:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

GitHub Actions will automatically build and deploy to GitHub Pages.

Your site will be available at: `https://yourusername.github.io/vroid_website_fe/`

## Backend (NestJS + Python AI Service)

### Option 1: Deploy to VPS/Cloud Server

**Requirements:**
- Node.js 20+
- Python 3.11+
- PM2 (for process management)

**Steps:**

1. **Clone repository:**
```bash
git clone <your-repo>
cd vroid_website_be
```

2. **Install dependencies:**
```bash
npm install
cd ../ai-service-python
pip install -r requirements.txt
```

3. **Setup environment variables:**
```bash
# vroid_website_be/.env
DATABASE_URL="your-database-url"
JWT_SECRET="your-jwt-secret"
GOOGLE_GEMINI_API_KEY="your-api-key"
FRONTEND_URL="https://yourusername.github.io/vroid_website_fe"
BACKEND_URL="https://your-backend-domain.com"

# ai-service-python/.env
GOOGLE_GEMINI_API_KEY="your-api-key"
PORT=5000
```

4. **Build NestJS:**
```bash
cd vroid_website_be
npm run build
```

5. **Start services with PM2:**
```bash
# Start Python AI service
pm2 start ai-service-python/app.py --name ai-service --interpreter python3

# Start NestJS backend
pm2 start npm --name backend -- run start:prod

# Save PM2 configuration
pm2 save
pm2 startup
```

6. **Setup Nginx reverse proxy:**
```nginx
server {
    listen 80;
    server_name your-backend-domain.com;

    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /public {
        proxy_pass http://localhost:3001;
    }
}
```

### Option 2: Deploy to Railway/Render

**Railway:**
1. Create new project
2. Add two services:
   - NestJS backend (from `vroid_website_be`)
   - Python AI service (from `ai-service-python`)
3. Add environment variables
4. Deploy

**Render:**
1. Create Web Service for NestJS
2. Create Web Service for Python
3. Add environment variables
4. Deploy

### Option 3: Deploy to Heroku

**NestJS Backend:**
```bash
cd vroid_website_be
heroku create your-app-backend
heroku config:set DATABASE_URL="..." JWT_SECRET="..." GOOGLE_GEMINI_API_KEY="..."
git push heroku main
```

**Python AI Service:**
```bash
cd ai-service-python
heroku create your-app-ai-service
heroku config:set GOOGLE_GEMINI_API_KEY="..."
git push heroku main
```

## Database

### PostgreSQL (Recommended for production)

1. Create PostgreSQL database (e.g., on Railway, Supabase, or Neon)
2. Update `DATABASE_URL` in `.env`
3. Run migrations:
```bash
cd vroid_website_be
npx prisma migrate deploy
```

## CORS Configuration

Make sure backend allows your GitHub Pages domain:

```typescript
// vroid_website_be/src/main.ts
app.enableCors({
  origin: [
    'http://localhost:5173',
    'https://yourusername.github.io'
  ],
  credentials: true,
});
```

## Testing Production Build Locally

```bash
# Frontend
cd vroid_website_fe
npm run build
npm run preview

# Backend
cd vroid_website_be
npm run build
npm run start:prod

# Python AI Service
cd ai-service-python
python app.py
```

## Monitoring

Use PM2 for monitoring:
```bash
pm2 monit
pm2 logs
pm2 status
```

## Troubleshooting

### CORS errors
- Check `FRONTEND_URL` in backend `.env`
- Verify CORS configuration in `main.ts`

### AI generation fails
- Check Python service is running: `pm2 status`
- Check Python service logs: `pm2 logs ai-service`
- Verify `GOOGLE_GEMINI_API_KEY` is set

### Images not loading
- Check `BACKEND_URL` in backend `.env`
- Verify static files are served correctly
- Check Nginx configuration if using reverse proxy
