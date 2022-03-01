const express = require('express');
require('dotenv').config();
const cors = require('cors');
const regions = require('./routes/regions');
const products = require('./routes/products');
const applications = require('./routes/aplicacionesAct');
const pmtConfigGeneral = require('./routes/PmtConfigGeneral');

const app = express();
app.use(cors())

app.use(express.urlencoded({ extended: true }), express.json());

app.use(regions);
app.use(products);
app.use(applications);
app.use(pmtConfigGeneral);

app.post('/', (req, res) => {
    res.json({ test: req.body.test, numer: req.body.numer });
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Api BPD listening at http://localhost:${process.env.SERVER_PORT}`);
})