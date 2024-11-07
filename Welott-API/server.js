const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001; // Ensure this is the port you want
const galleries = require('./db')

console.log(galleries);


app.use(cors());
app.use(express.json()); 

// Define the /api/images route
app.get('/api/images', (req, res) => {
    const galleryName = req.query.gallery; // Get the gallery name from the query parameters
    const galleryImages = galleries[galleryName]; // Fetch the images for the specified gallery

    if (galleryImages) {
        console.log(`Sending images for gallery: ${galleryName}`); // Log which gallery is being sent
        res.json(galleryImages); // Send the images as a response
    } else {
        res.status(404).json({ error: 'Gallery not found' }); // Return a 404 if the gallery is not found
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
