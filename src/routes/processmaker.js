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

app.post('/pm/save-client', async (req, res) => {
    const response = await ProcessMakerRepository.saveClient(req.body)
    res.json(response);
});

app.post('/pm/create-case', async (req, res) => {
    const response = await ProcessMakerRepository.createCase(req.body)
    res.json(response);
});

app.post('/pm/return-items', async (req, res) => {
    const response = await ProcessMakerRepository.returnItems(req.body)
    res.json(response);
});

app.post('/pm/pre-return', async (req, res) => {
    const response = await ProcessMakerRepository.preReturn(req.body)
    res.json(response);
});

module.exports = app;