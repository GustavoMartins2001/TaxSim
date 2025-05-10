const express = require('express');
const app = express();
const connectDB = require('./database/database');

connectDB();

app.use(express.json());

module.exports = app;