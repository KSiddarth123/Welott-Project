const express = require('express');
const bodyParser = require('body-parser');
const contactRoutes = require('./contact'); // Ensure path is correct
const cors = require('cors');

const app = express(); // Initialize the Express app

// Middleware
app.use(cors()); // This will allow requests from any origin. Adjust as needed for production.
app.use(bodyParser.json()); // For parsing application/json

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the contact API!'); // Simple welcome message
});

// Use the contact routes for /api/contact
app.use('/api/contact', contactRoutes);

const PORT = 3001; // Define the port

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
