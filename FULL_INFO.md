# TechnoSchool Website - Complete Documentation

## 📋 Project Overview

TechnoSchool is a modern, responsive website for a technical training institute built with vanilla HTML, CSS, and JavaScript on the frontend, and Node.js with MySQL on the backend.

### Technology Stack

**Frontend:**
- HTML5
- CSS3 (with modern features like Grid, Flexbox, CSS Variables)
- Vanilla JavaScript (ES6+)

**Backend:**
- Node.js
- Express.js
- MySQL 2 (Promise-based)

**Development Tools:**
- Nodemon (for development)
- dotenv (environment variables)

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MySQL Server (v5.7 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone or download the project**
   ```bash
   cd technoschool-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure MySQL Database**
   
   Create a MySQL database:
   ```sql
   CREATE DATABASE technoschool;
   ```

4. **Set up environment variables**
   
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file with your MySQL credentials:
   ```env
   PORT=3000
   MYSQL_HOST=localhost
   MYSQL_USER=root
   MYSQL_PASSWORD=your_password
   MYSQL_DATABASE=technoschool
   ```

5. **Start the server**
   
   For development (with auto-reload):
   ```bash
   npm run dev
   ```
   
   For production:
   ```bash
   npm start
   ```

6. **Access the website**
   
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
technoschool-website/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles
├── js/
│   └── app.js             # Frontend JavaScript
├── public/
│   ├── images/            # Image assets
│   └── logo.svg           # Logo file
├── server-new.js          # Node.js Express server
├── package-new.json       # Dependencies
├── .env.example           # Environment variables template
├── .env                   # Your environment variables (create this)
└── FULL_INFO_NEW.md       # This documentation file
```

---

## 🗄️ Database Schema

The application automatically creates the following tables on first run:

### 1. contacts
Stores contact form submissions
```sql
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    course VARCHAR(100),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. enrollments
Stores course enrollment requests
```sql
CREATE TABLE enrollments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    course VARCHAR(100) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. users
Stores user information (students, staff, admin)
```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

---

## 🔌 API Endpoints

### Health Check
- **GET** `/api/health`
- Returns server status
- Response: `{ status: 'ok', message: 'Server is running' }`

### Contact Form
- **POST** `/api/contact`
- Submit contact form
- Body: `{ name, email, phone, course, message }`
- Response: `{ success: true, message: '...', id: number }`

- **GET** `/api/contacts`
- Get all contact submissions (admin)
- Response: Array of contact objects

### Enrollments
- **POST** `/api/enroll`
- Submit enrollment request
- Body: `{ name, email, phone, course }`
- Response: `{ success: true, message: '...', id: number }`

- **GET** `/api/enrollments`
- Get all enrollments (admin)
- Response: Array of enrollment objects

### Users
- **GET** `/api/users`
- Get all users
- Response: Array of user objects

- **POST** `/api/users`
- Create new user
- Body: `{ name, email, role }`
- Response: `{ success: true, id, name, email, role }`

- **DELETE** `/api/users/:id`
- Delete user by ID
- Response: `{ success: true, message: '...' }`

### Statistics
- **GET** `/api/stats`
- Get database statistics
- Response: `{ contacts: number, enrollments: number, users: number }`

---

## 🎨 Frontend Features

### Sections

1. **Navigation Bar**
   - Fixed position with scroll effect
   - Mobile responsive with hamburger menu
   - Smooth scroll to sections

2. **Hero Section**
   - Animated background with orbs
   - Call-to-action buttons
   - Key statistics display
   - Scroll indicator

3. **About Section**
   - Institute information
   - Feature highlights
   - Statistics cards

4. **Services Section**
   - 6 service cards
   - Hover effects
   - Icon-based design

5. **Courses Section**
   - 6 course offerings
   - Detailed course cards
   - Modal popup for course details
   - Tools and career outcomes

6. **Placements Section**
   - Company logos grid
   - Student testimonials
   - Success stories

7. **Contact Section**
   - Contact information
   - Contact form with validation
   - Course selection dropdown

8. **Footer**
   - Quick links
   - Course links
   - Social media links

### Interactive Features

- **Smooth Scrolling**: Anchor links scroll smoothly to sections
- **Scroll Animations**: Sections fade in on scroll
- **Course Modals**: Click courses to see detailed information
- **Form Validation**: Client-side validation for contact form
- **Responsive Design**: Mobile-first approach, works on all devices
- **Hover Effects**: Interactive cards and buttons

---

## 🎯 Courses Offered

1. **Software Development** (6 Months)
   - Java, Python, C++, Git, DSA
   - Career: Software Engineer, Backend Developer, System Architect

2. **Web Development** (4 Months)
   - React, Node.js, MongoDB, TypeScript, Next.js
   - Career: Full Stack Developer, Frontend Engineer, Web Architect

3. **AI / ML** (6 Months)
   - Python, TensorFlow, PyTorch, Scikit-learn, OpenCV
   - Career: ML Engineer, AI Developer, Data Scientist

4. **Data Science** (5 Months)
   - Python, R, SQL, Tableau, Power BI
   - Career: Data Analyst, Data Engineer, Business Analyst

5. **Cybersecurity** (4 Months)
   - Kali Linux, Wireshark, Metasploit, Burp Suite, OWASP
   - Career: Security Analyst, Penetration Tester, SOC Analyst

6. **Cloud & DevOps** (4 Months)
   - AWS, Docker, Kubernetes, Jenkins, Terraform
   - Career: DevOps Engineer, Cloud Architect, SRE

---

## 🎨 Design System

### Color Palette
```css
--bg-primary: #09090b          /* Main background */
--bg-secondary: rgba(24, 24, 27, 0.8)  /* Card backgrounds */
--text-primary: #fafafa        /* Main text */
--text-secondary: #a1a1aa      /* Secondary text */
--text-muted: #71717a          /* Muted text */
--border-color: rgba(255, 255, 255, 0.08)  /* Borders */
--accent-color: #ffffff        /* Accent color */
--gradient: linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)
```

### Typography
- Font Family: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- Base Font Size: 16px
- Line Height: 1.6

### Spacing
- Container Max Width: 1200px
- Section Padding: 120px vertical
- Card Padding: 32px
- Gap Sizes: 8px, 16px, 24px, 32px, 48px, 64px

### Border Radius
- Small: 8px
- Medium: 12px
- Large: 16px
- Extra Large: 24px
- Pill: 9999px

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 480px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Desktop */
@media (min-width: 769px) { }
```

---

## 🔧 Customization Guide

### Adding a New Course

1. **Update `js/app.js`**:
   ```javascript
   const courses = [
       // ... existing courses
       {
           icon: '🎓',
           title: 'Your Course Name',
           duration: 'X Months',
           tools: ['Tool1', 'Tool2', 'Tool3'],
           outcomes: ['Career1', 'Career2', 'Career3'],
           description: 'Course description here.'
       }
   ];
   ```

2. The course will automatically appear on the website.

### Adding a New Service

1. **Update `js/app.js`**:
   ```javascript
   const services = [
       // ... existing services
       {
           icon: '🎯',
           title: 'Service Name',
           description: 'Service description here.'
       }
   ];
   ```

### Changing Colors

1. **Edit `css/style.css`**:
   ```css
   :root {
       --bg-primary: #your-color;
       --text-primary: #your-color;
       /* ... other variables */
   }
   ```

### Adding New API Endpoints

1. **Edit `server-new.js`**:
   ```javascript
   app.get('/api/your-endpoint', async (req, res) => {
       // Your logic here
       res.json({ data: 'your data' });
   });
   ```

---

## 🚀 Deployment

### Option 1: Traditional Hosting (VPS/Dedicated Server)

1. **Install Node.js and MySQL on server**

2. **Clone your project**
   ```bash
   git clone your-repo-url
   cd technoschool-website
   ```

3. **Install dependencies**
   ```bash
   npm install --production
   ```

4. **Set up environment variables**
   ```bash
   nano .env
   # Add your production values
   ```

5. **Use PM2 for process management**
   ```bash
   npm install -g pm2
   pm2 start server-new.js --name technoschool
   pm2 save
   pm2 startup
   ```

6. **Set up Nginx as reverse proxy**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

### Option 2: Cloud Platforms

**Heroku:**
1. Create `Procfile`: `web: node server-new.js`
2. Add MySQL addon (ClearDB or JawsDB)
3. Set environment variables in Heroku dashboard
4. Deploy: `git push heroku main`

**DigitalOcean App Platform:**
1. Connect your GitHub repository
2. Add MySQL database
3. Set environment variables
4. Deploy automatically

**AWS:**
1. Use EC2 for server
2. Use RDS for MySQL
3. Configure security groups
4. Set up load balancer (optional)

---

## 🔒 Security Best Practices

1. **Environment Variables**
   - Never commit `.env` file
   - Use strong database passwords
   - Change default credentials

2. **Database**
   - Use prepared statements (already implemented)
   - Limit user permissions
   - Regular backups

3. **Server**
   - Keep dependencies updated
   - Use HTTPS in production
   - Implement rate limiting
   - Add CORS if needed

4. **Input Validation**
   - Validate all user inputs
   - Sanitize data before database insertion
   - Implement CSRF protection

---

## 🐛 Troubleshooting

### Database Connection Issues

**Problem**: Cannot connect to MySQL
```
Error: connect ECONNREFUSED 127.0.0.1:3306
```

**Solution**:
1. Check if MySQL is running: `sudo service mysql status`
2. Verify credentials in `.env` file
3. Check MySQL port (default: 3306)
4. Ensure database exists

### Port Already in Use

**Problem**: Port 3000 is already in use

**Solution**:
1. Change PORT in `.env` file
2. Or kill the process: `lsof -ti:3000 | xargs kill -9`

### Module Not Found

**Problem**: Cannot find module 'express'

**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Database Tables Not Created

**Problem**: Tables don't exist

**Solution**:
1. Check database connection
2. Restart server (tables are created on startup)
3. Manually run SQL from "Database Schema" section

---

## 📊 Performance Optimization

1. **Frontend**
   - Minify CSS and JavaScript for production
   - Optimize images (use WebP format)
   - Enable browser caching
   - Use CDN for static assets

2. **Backend**
   - Use connection pooling (already implemented)
   - Add Redis for caching
   - Implement pagination for large datasets
   - Use indexes on frequently queried columns

3. **Database**
   ```sql
   -- Add indexes
   CREATE INDEX idx_email ON users(email);
   CREATE INDEX idx_created_at ON contacts(created_at);
   CREATE INDEX idx_course ON enrollments(course);
   ```

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] Homepage loads correctly
- [ ] Navigation works on all devices
- [ ] All sections are visible
- [ ] Contact form submits successfully
- [ ] Course modals open and close
- [ ] Mobile menu works
- [ ] All API endpoints respond
- [ ] Database operations work

### API Testing with cURL

```bash
# Health check
curl http://localhost:3000/api/health

# Submit contact form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","phone":"1234567890","course":"web","message":"Test message"}'

# Get contacts
curl http://localhost:3000/api/contacts

# Get statistics
curl http://localhost:3000/api/stats
```

---

## 📝 Future Enhancements

### Planned Features

1. **Admin Dashboard**
   - View all contacts and enrollments
   - Manage courses and content
   - Analytics and reports

2. **User Authentication**
   - Student login/registration
   - Password reset functionality
   - Profile management

3. **Payment Integration**
   - Online course payments
   - Payment gateway integration
   - Invoice generation

4. **Blog Section**
   - Technical articles
   - Student success stories
   - Industry news

5. **Live Chat**
   - Real-time support
   - Chatbot integration
   - WhatsApp integration

6. **Email Notifications**
   - Welcome emails
   - Course reminders
   - Newsletter

---

## 🤝 Contributing

If you want to contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📄 License

This project is licensed under the MIT License.

---

## 📞 Support

For support and queries:
- Email: info@technoschool.edu
- Phone: +91 98765 43210
- Website: http://localhost:3000

---

## 🎓 Credits

**Developed by**: TechnoSchool Development Team
**Version**: 1.0.0
**Last Updated**: 2024

---

## 📚 Additional Resources

### Learning Resources
- [Express.js Documentation](https://expressjs.com/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [MDN Web Docs](https://developer.mozilla.org/)

### Tools
- [Postman](https://www.postman.com/) - API testing
- [MySQL Workbench](https://www.mysql.com/products/workbench/) - Database management
- [VS Code](https://code.visualstudio.com/) - Code editor

---

**Happy Coding! 🚀**
