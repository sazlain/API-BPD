const axios = require('axios');
const CONSTANTS = require('../resources/constants');

module.exports = Triggers = {
    TG_ACTUALIZAR_TITULO_CASO: async (appUid) => {

        const response = await axios({
            url: CONSTANTS.WORKFLOW_BASE_URL + CONSTANTS.WORKFLOW_API_PATH + CONSTANTS.WORKFLOW_WORKSPACE + "/cases/" + appUid + "/execute-trigger/" + CONSTANTS.TG_ACTUALIZAR_TITULO_CASO,
            method: 'put',
            headers: { 'Authorization': 'Bearer ' + token.access_token }
        }).then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err.response.data)
        });

        return response;
    },
    TG_PMF_NEW_CASE_REC_INV: async (appUid) => {

        const response = await axios({
            url: CONSTANTS.WORKFLOW_BASE_URL + CONSTANTS.WORKFLOW_API_PATH + CONSTANTS.WORKFLOW_WORKSPACE + "/cases/" + appUid + "/execute-trigger/" + CONSTANTS.TG_PMF_NEW_CASE_REC_INV,
            method: 'put',
            headers: { 'Authorization': 'Bearer ' + token.access_token }
        }).then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err.response.data)
        });

        return response;
    },
    TG_NOTIFICAR_NUEVO_CASO_VENDEDOR: async (appUid) => {

        const response = await axios({
            url: CONSTANTS.WORKFLOW_BASE_URL + CONSTANTS.WORKFLOW_API_PATH + CONSTANTS.WORKFLOW_WORKSPACE + "/cases/" + appUid + "/execute-trigger/" + CONSTANTS.TG_NOTIFICAR_NUEVO_CASO_VENDEDOR,
            method: 'put',
            headers: { 'Authorization': 'Bearer ' + token.access_token }
        }).then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err.response.data)
        });

        return response;
    }
} 