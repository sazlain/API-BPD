const express = require('express');
const { sequelize, QueryTypes } = require('../config/Db');
const PmtConfigGeneralRepository = require('../repositories/PmtConfigGeneralRepository')
const app = express.Router();

app.get('/general-config', async (req, res) => {
    const configGeneral = await PmtConfigGeneralRepository.get();
    res.json(configGeneral);
});

module.exports = app;