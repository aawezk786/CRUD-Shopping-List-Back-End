// Importing Modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const route = require('./route/routes');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/shoppinglist');

// On Connection
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected at port 27017');
});

// On Connection Error
mongoose.connection.on('error', (err) => {
    console.log(err);
});

// Port
const PORT = 3000;

// Adding Middleware - CORS
app.use(cors());

// Body-Parser Middleware
app.use(bodyParser.json());

// Adding api route to all routes
app.use('/api', route);

// Home Route
app.get('/', (req, res) => {
    res.send('some changes');
});

// Start Server
app.listen(PORT, () => {
    console.log('Server has been started on port ' + PORT);
});