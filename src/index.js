const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');
const regions = require('./routes/regions');
const products = require('./routes/products');
const applications = require('./routes/aplicacionesAct');
const pmtConfigGeneral = require('./routes/PmtConfigGeneral');
const processmaker = require('./routes/processmaker');
const PmOauth2 = require("../src/services/PmOauth2");

global.token = {};

axios.interceptors.request.use(request => {
    PmOauth2.validateExpiredToken(token)
    return request;
}, error => {
    console.log(error.request.data)
    return Promise.reject(error)
});


const app = express();
app.use(cors())

app.use(express.urlencoded({ extended: true }), express.json());

app.use(regions);
app.use(products);
app.use(applications);
app.use(pmtConfigGeneral);
app.use(processmaker);

PmOauth2.getToken().then((res) => {
    token = res;
    const curTime = new Date().getTime() / 1000;
    token.time = curTime;
}).catch((e) => {
    console.log("errro oauth2", e)
});

app.post('/', (req, res) => {
    res.json({ test: req.body.test, numer: req.body.numer });
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Api BPD listening at http://localhost:${process.env.SERVER_PORT}`);
})