const express = require('express');
const ProcessMakerRepository = require('../repositories/ProcessMakerRepository')
const app = express.Router();

app.post('/pm/validate-existence', async (req, res) => {
    const response = await ProcessMakerRepository.validateExistence(req.body)
    res.json(response);
});

app.post('/pm/update-pre-reserva', async (req, res) => {
    const response = await ProcessMakerRepository.updatePreReserva(req.body)
    res.json(response);
});


app.post('/pm/create-case', async (req, res) => {
    const response = await ProcessMakerRepository.createCase(req.body)
    res.json(response);
});

module.exports = app;