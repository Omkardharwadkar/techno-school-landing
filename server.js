require('dotenv').config();
const express = require('express');
const path = require('path');
const mysql = require('mysql2/promise');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// MySQL Connection Pool
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'technoschool',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Initialize Database
async function initDatabase() {
    try {
        const connection = await pool.getConnection();
        
        // Create database if not exists
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.MYSQL_DATABASE || 'technoschool'}`);
        await connection.query(`USE ${process.env.MYSQL_DATABASE || 'technoschool'}`);
        
        // Create contacts table
        await connection.query(`
            CREATE TABLE IF NOT EXISTS contacts (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone VARCHAR(20),
                course VARCHAR(100),
                message TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        
        // Create enrollments table
        await connection.query(`
            CREATE TABLE IF NOT EXISTS enrollments (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone VARCHAR(20) NOT NULL,
                course VARCHAR(100) NOT NULL,
                status VARCHAR(50) DEFAULT 'pending',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        
        // Create users table (for admin/staff)
        await connection.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                role VARCHAR(50) DEFAULT 'student',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `);
        
        connection.release();
        console.log('✅ Database initialized successfully');
    } catch (error) {
        console.error('❌ Database initialization error:', error);
    }
}

// Routes

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, course, message } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    
    try {
        const [result] = await pool.query(
            'INSERT INTO contacts (name, email, phone, course, message) VALUES (?, ?, ?, ?, ?)',
            [name, email, phone, course, message]
        );
        
        res.json({
            success: true,
            message: 'Contact form submitted successfully',
            id: result.insertId
        });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ error: 'Failed to save contact information' });
    }
});

// Get all contacts (admin)
app.get('/api/contacts', async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM contacts ORDER BY created_at DESC LIMIT 100'
        );
        res.json(rows);
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({ error: 'Failed to fetch contacts' });
    }
});

// Enrollment
app.post('/api/enroll', async (req, res) => {
    const { name, email, phone, course } = req.body;
    
    if (!name || !email || !phone || !course) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    
    try {
        const [result] = await pool.query(
            'INSERT INTO enrollments (name, email, phone, course) VALUES (?, ?, ?, ?)',
            [name, email, phone, course]
        );
        
        res.json({
            success: true,
            message: 'Enrollment submitted successfully',
            id: result.insertId
        });
    } catch (error) {
        console.error('Error saving enrollment:', error);
        res.status(500).json({ error: 'Failed to save enrollment' });
    }
});

// Get all enrollments (admin)
app.get('/api/enrollments', async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM enrollments ORDER BY created_at DESC LIMIT 100'
        );
        res.json(rows);
    } catch (error) {
        console.error('Error fetching enrollments:', error);
        res.status(500).json({ error: 'Failed to fetch enrollments' });
    }
});

// Users CRUD
app.get('/api/users', async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT id, name, email, role, created_at FROM users ORDER BY created_at DESC'
        );
        res.json(rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

app.post('/api/users', async (req, res) => {
    const { name, email, role } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    
    try {
        const [result] = await pool.query(
            'INSERT INTO users (name, email, role) VALUES (?, ?, ?)',
            [name, email, role || 'student']
        );
        
        res.json({
            success: true,
            id: result.insertId,
            name,
            email,
            role: role || 'student'
        });
    } catch (error) {
        console.error('Error creating user:', error);
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(400).json({ error: 'Email already exists' });
        } else {
            res.status(500).json({ error: 'Failed to create user' });
        }
    }
});

app.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        res.json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Failed to delete user' });
    }
});

// Statistics endpoint
app.get('/api/stats', async (req, res) => {
    try {
        const [contactsCount] = await pool.query('SELECT COUNT(*) as count FROM contacts');
        const [enrollmentsCount] = await pool.query('SELECT COUNT(*) as count FROM enrollments');
        const [usersCount] = await pool.query('SELECT COUNT(*) as count FROM users');
        
        res.json({
            contacts: contactsCount[0].count,
            enrollments: enrollmentsCount[0].count,
            users: usersCount[0].count
        });
    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({ error: 'Failed to fetch statistics' });
    }
});

// Serve index.html for root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 3000;

initDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
        console.log(`📊 Database: ${process.env.MYSQL_DATABASE || 'technoschool'}`);
    });
});

// Graceful shutdown
process.on('SIGTERM', async () => {
    console.log('SIGTERM signal received: closing HTTP server');
    await pool.end();
    process.exit(0);
});
