const PmtArticulos = require('../models/PmtArticulos');

const ArticulosRepository = {
    get: () => {
        return PmtArticulos.findAll({ limit: 10 });
    },
    post: () => { }
}

module.exports = ArticulosRepository;