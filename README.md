# Ticket Management App (Multi-Environment)

## 📦 Project Structure
- Two Flask APIs: development and production
- React frontend to connect with both

## 🔧 Requirements
- Docker
- Docker Compose

## 🚀 Deployment

```bash
docker-compose up --build
```

## 🌐 Access URLs
- Frontend: http://localhost:3000
- Dev Backend: http://localhost:5000
- Prod Backend: http://localhost:5001

## 🧪 Testing
Use browser or Postman to hit:
- `/` for hello message
- `/health` for health check

## 📄 Assumptions
- Frontend talks to Flask via environment variables
- All services use Docker networking