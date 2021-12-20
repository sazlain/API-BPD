const express = require('express');
const { sequelize, QueryTypes } = require('../config/Db');
const app = express.Router();


const getApplicationsMarketplace = async () => {

    return await sequelize.query("SELECT DISTINCT (SPLIT_STR(paa.APLICACION,' ', 2)) " +
        "APLICACION_SPLITED,paa.APLICACION, paa.YEAR_INI, paa.YEAR_FIN from PMT_APLICACIONES_ACT paa " +
        "inner join PMT_MARKETPLACES pm on paa.CODIGO = pm.CODIGO where pm.MARKETPLACE = '004' " +
        "ORDER by APLICACION ASC", { type: QueryTypes.SELECT });

}

const getApplicationsYearStart = async () => {
    const applicationYearStart = [];
    const applicationsMarketplace = await getApplicationsMarketplace();

    applicationsMarketplace.forEach((item) => {
        const foundStart = applicationYearStart.find((finder) => finder == item.YEAR_INI);
        if (!foundStart) applicationYearStart.push(parseInt(item.YEAR_INI));
    });

    applicationYearStart.sort((a, b) => {
        return a - b;
    });

    return applicationYearStart;
}

const getApplicationsYearEnd = async () => {
    const applicationYearEnd = [];
    const applicationsMarketplace = await getApplicationsMarketplace();

    applicationsMarketplace.forEach((item) => {
        const foundEnd = applicationYearEnd.find((finder) => finder == item.YEAR_FIN);
        if (!foundEnd) applicationYearEnd.push(parseInt(item.YEAR_FIN));
    });

    applicationYearEnd.sort((a, b) => {
        return a - b;
    });

    return applicationYearEnd;
}

const getApplicationsBrands = async () => {
    const brands = [];
    const applicationsMarketplace = await getApplicationsMarketplace();

    applicationsMarketplace.forEach((item) => {
        const foundBrand = brands.find((finder) => finder == item.APLICACION.split(' ')[1]);
        if (!foundBrand) brands.push(item.APLICACION.split(' ')[1]);
    });

    brands.sort();

    return brands;
}

const getApplicationsModels = async (brand) => {
    const models = [];
    const applicationsMarketplace = await getApplicationsMarketplace();

    applicationsMarketplace.forEach((item) => {
        const aplicacionSplited = item.APLICACION.split(' ');
        let strModel = '';

        for (let i = 2; i < aplicacionSplited.length; i++) {
            strModel += i == 2 ? aplicacionSplited[i] : ' ' + aplicacionSplited[i];
        }

        const foundModel = models.find((finder) => finder.model == strModel);
        if (!foundModel) models.push({ brand: item.APLICACION.split(' ')[1], model: strModel });
    });

    models.sort();

    return models;
}

app.get('/applications-marketplace', async (req, res) => {

    const applicationsMarketplace = await getApplicationsMarketplace();

    res.json(applicationsMarketplace);

});

app.get('/applications-year-start', async (req, res) => {

    const applicationsYearStart = await getApplicationsYearStart();

    res.json(applicationsYearStart);

});

app.get('/applications-year-end', async (req, res) => {

    const applicationsYearEnd = await getApplicationsYearEnd();

    res.json(applicationsYearEnd);

});

app.get('/applications-brands', async (req, res) => {

    const applicationsBrands = await getApplicationsBrands();

    res.json(applicationsBrands);

});

app.get('/applications-models', async (req, res) => {

    const applicationsModels = await getApplicationsModels();

    res.json(applicationsModels);

});

module.exports = app;