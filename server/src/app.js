const express = require('express');
const app = express();
const connectDB = require('./database/database');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');


connectDB();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;