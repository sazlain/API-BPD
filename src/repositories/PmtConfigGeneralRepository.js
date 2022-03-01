const PmtConfigGeneral = require('../models/PmtConfigGeneral');

const PmtConfigGeneralRepository = {
    get: () => {
        return PmtConfigGeneral.findAll();
    },
    post: () => { }
}

module.exports = PmtConfigGeneralRepository;