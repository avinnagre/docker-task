const mysql = require('mysql2/promise');
require('dotenv').config();

async function testConnection() {
    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    });

    try {
        const [rows] = await pool.query('SELECT 1 + 1 AS result');
        console.log('Database connection successful. Test query result:', rows[0].result);
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

testConnection();
