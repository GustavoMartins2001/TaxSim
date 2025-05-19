const express = require('express');
const app = express();
const connectDB = require('./database/database');
const userRoutes = require('./routes/userRoutes');


connectDB();

app.use(express.json());
app.use('/api/users', userRoutes);

module.exports = app;