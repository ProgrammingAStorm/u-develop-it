const express = require('express');
const mysql = require('mysql2');

const inputCheck = require('./utils/inputCheck');
const db = require('./db/connections.js');

const PORT = process.env.PORT || 3001;
const app = express();
// Add near the top of the file
const apiRoutes = require('./routes/apiRoutes');

// Add after Express middleware
app.use('/api', apiRoutes);

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
}); 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
