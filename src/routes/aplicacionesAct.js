const express = require('express');
const { sequelize, QueryTypes } = require('../config/Db');
const AplicacionesActRepository = require('../repositories/AplicacionesActRepository')
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

const getApplicationsModelsByBrand = async (data) => {

    const models = await AplicacionesActRepository.getModelsByBrand(data);
    return models;

}

const getApplicationsBrandsByYear = async (data) => {

    const brands = await AplicacionesActRepository.getBrandsByYear(data);
    return brands;

}

const getFilteredPartsList = async (filter) => {
    const list = await AplicacionesActRepository.getFilteredPartsList(filter);
    const seen = new Set();

    const filteredArr = list.filter(el => {
        const duplicate = seen.has(el.CODIGO);
        seen.add(el.CODIGO);
        return !duplicate;
    });

    return filteredArr;

}

const getFilteredPartsListPaginated = async (filter) => {
    const list = await AplicacionesActRepository.getFilteredPartsListPaginated(filter);
    const seen = new Set();

    const filteredArr = list.filter(el => {
        const duplicate = seen.has(el.CODIGO);
        seen.add(el.CODIGO);
        return !duplicate;
    });

    return filteredArr;

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

app.post('/applications-models', async (req, res) => {

    const applicationsModels = await getApplicationsModelsByBrand(req.body);
    res.json(applicationsModels);

});

app.post('/filtered-parts-list', async (req, res) => {

    const filteredPartsList = await getFilteredPartsList(req.body);
    res.json(filteredPartsList);

});

app.post('/filtered-parts-list-paginated', async (req, res) => {

    const filteredPartsList = await getFilteredPartsListPaginated(req.body);
    res.json(filteredPartsList);

});

app.post('/brandsByYear', async (req, res) => {
    const brands = await getApplicationsBrandsByYear(req.body);
    res.json(brands);
});

module.exports = app;