const express = require('express');
const ArticulosRepository = require('../repositories/ArticulosRepository');
const app = express.Router();

app.get('/products', async (req, res) => {
    const products = await ArticulosRepository.get();
    res.json(products);
});

module.exports = app;