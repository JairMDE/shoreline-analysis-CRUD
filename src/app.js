const express = require('express');
const shorelineDataRoutes = require('./routes/shorelineDataRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use('/api/shoreline-data', shorelineDataRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
