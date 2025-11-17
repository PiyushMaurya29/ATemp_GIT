const express = require('express');
const app = express();
const port = 5000;

require('./db');
const Hotel = require('./hotelModel');

// MIDDLEWARE – REQUIRED for JSON
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('API running...');
});

// POST API
app.post('/add-hotel', async (req, res) => {
    console.log("BODY:", req.body);  // Debug

    try {
        const { name, location, price } = req.body;

        const newHotel = new Hotel({ name, location, price });
        await newHotel.save();

        res.status(201).json({
            success: true,
            message: "Hotel added successfully",
            data: newHotel
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error adding hotel",
            error: error.message
        });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
