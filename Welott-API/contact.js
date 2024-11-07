const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

// PostgreSQL connection setup
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'contact_forms',
    password: 'sys123',
    port: 5432,
});

router.post('/', async (req, res) => {
    console.log('Received request:', req.body);
    const { name, company, email, phone, message, captcha } = req.body;

    // Map `captcha` to `captcha_code`
    const captcha_code = captcha;

    try {
        // Insert data into the database
        const query = 'INSERT INTO contact_forms (name, company, email, phone, message, captcha_code) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
        const values = [name, company, email, phone, message, captcha_code];
        const result = await pool.query(query, values);

        console.log('Insert successful:', result.rows[0]);

        res.status(201).json({
            message: 'Contact form submitted successfully',
            data: result.rows[0]
        });
    } catch (error) {
        console.error('Error inserting data into PostgreSQL', error);
        res.status(500).json({ message: 'Error saving data' });
    }
});

module.exports = router;
