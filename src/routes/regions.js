const express = require('express');
const app = express.Router();

const PmtRegiones = require('../models/PmtRegion');

app.get('/regions', async (req, res) => {
    const regions = await PmtRegiones.findAll();
    res.json(regions);
});

module.exports = app;