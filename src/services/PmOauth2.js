const axios = require('axios');
const CONSTANTS = require('../resources/constants');

const refreshToken = async (rToken) => {
    const data = {
        "grant_type": "refresh_token",
        "refresh_token": rToken.refresh_token,
        "client_id": process.env.OAUTH2_CLIENT_ID,
        "client_secret": process.env.OAUTH2_CLIENT_SECRET
    };

    const resToken = await axios({
        url: CONSTANTS.WORKFLOW_BASE_URL + CONSTANTS.WORKFLOW_WORKSPACE + "/oauth2/token",
        method: 'POST',
        data,
        headers: { 'Content-type': 'application/json' },
    }).then((res) => {
        const seconds = new Date().getTime() / 1000;
        rToken.time = seconds;
        return res.data
    });

    return resToken;
}

module.exports = PmOauth2 = {

    getToken: async () => {

        const data = {
            "grant_type": "password",
            "scope": "*",
            "client_id": process.env.OAUTH2_CLIENT_ID,
            "client_secret": process.env.OAUTH2_CLIENT_SECRET,
            "username": process.env.OAUTH2_USER,
            "password": process.env.OAUTH2_PASSWORD
        };

        const token = await axios({
            url: CONSTANTS.WORKFLOW_BASE_URL + CONSTANTS.WORKFLOW_WORKSPACE + "/oauth2/token",
            method: 'POST',
            data,
            headers: { 'Content-type': 'application/json' },
        }).then((res) => {
            return res.data
        });

        return token;
    },
    validateExpiredToken: async (vToken) => {
        const curTime = new Date().getTime() / 1000;

        if ((curTime - vToken.time) >= vToken.expires_in) {
            await refreshToken(vToken).then((res) => {
                vToken.access_token = res.access_token;
                vToken.refresh_token = res.refresh_token;
                vToken.time = curTime;
            });
        }
    },

}