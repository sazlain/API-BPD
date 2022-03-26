const axios = require('axios');
const CONSTANTS = require('../../src/resources/constants');
const Triggers = require('../services/Triggers')

const ProcessMakerRepository = {
    validateExistence: async (data) => {

        const datos = JSON.stringify(data.datos);

        const params = new URLSearchParams();
        params.append('datos', datos);
        params.append('correo', data.correo);
        params.append('region', data.region);
        params.append('ubicador', data.ubicador);

        const response = await axios.post(CONSTANTS.WORKFLOW_BASE_URL + CONSTANTS.WORKFLOW_API_REST.VALIDATE_EXISTENCE, params).then((res) => {
            return res.data
        });

        return response;
    },
    updatePreReserva: async (data) => {

        const datos = JSON.stringify(data.datos);

        const params = new URLSearchParams();
        params.append('datos3', datos);
        params.append('correo', data.correo);
        params.append('region', data.region);
        params.append('ubicador', data.ubicador);
        params.append('total_orden', data.total_orden);
        params.append('nmb', data.nmb);
        params.append('apell', data.apell);
        params.append('tlf', data.tlf);
        params.append('lang', data.lang);

        const response = await axios.post(CONSTANTS.WORKFLOW_BASE_URL + CONSTANTS.WORKFLOW_API_REST.UPDATE_PRERESERVA, params).then((res) => {
            return res.data
        });

        return response;
    },
    createCase: async (data) => {

        const response = await axios({
            url: CONSTANTS.WORKFLOW_BASE_URL + CONSTANTS.WORKFLOW_API_PATH + CONSTANTS.WORKFLOW_WORKSPACE + "/cases",
            method: 'post',
            headers: { 'Authorization': 'Bearer ' + token.access_token },
            data
        }).then((res) => {

            Triggers.TG_ACTUALIZAR_TITULO_CASO(res.data.app_uid)
                .then((res2) => {
                    Triggers.TG_PMF_NEW_CASE_REC_INV(res.data.app_uid)
                        .then((res3) => {
                            Triggers.TG_NOTIFICAR_NUEVO_CASO_VENDEDOR(res.data.app_uid);
                        });
                });
            return res.data
        }).catch((err) => {
            console.log(err.response.data)
        });

        return response;
    }
}

module.exports = ProcessMakerRepository;