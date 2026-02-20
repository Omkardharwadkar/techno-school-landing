# TechnoSchool Website

Modern, responsive technical training institute website built with HTML, CSS, JavaScript, Node.js, and MySQL.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- MySQL Server (v5.7+)

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Create MySQL database
mysql -u root -p
CREATE DATABASE technoschool;
EXIT;

# 3. Configure environment
cp .env.example .env
# Edit .env with your MySQL password

# 4. Start server
npm start

# 5. Open browser
http://localhost:3000
```

## 📁 Project Structure

```
├── index.html          # Main website
├── css/style.css       # Styles
├── js/app.js          # Frontend logic
├── server.js          # Backend API
├── package.json       # Dependencies
├── .env.example       # Environment template
└── public/            # Static assets
```

## 🔌 API Endpoints

- `GET /api/health` - Health check
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contacts
- `POST /api/enroll` - Submit enrollment
- `GET /api/enrollments` - Get enrollments
- `GET /api/users` - Get users
- `POST /api/users` - Create user
- `DELETE /api/users/:id` - Delete user
- `GET /api/stats` - Get statistics

## 🎨 Features

- Responsive design (mobile-first)
- Smooth animations
- Course modals
- Contact form with validation
- MySQL database
- RESTful API

## 🛠️ Tech Stack

**Frontend:** HTML5, CSS3, Vanilla JavaScript  
**Backend:** Node.js, Express.js, MySQL2

## 📚 Documentation

For complete documentation, see [FULL_INFO.md](./FULL_INFO.md)

## 📝 License

MIT License
