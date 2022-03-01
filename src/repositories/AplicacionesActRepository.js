const { sequelize } = require('../config/Db');
const Querys = require('../../querys')

const AplicacionesActRepository = {
    getModelsByBrand: (brand) => {
        const q = Querys.GET_CAR_MODELS_LIST.replace('@@0', brand);
        console.log(q)
        return sequelize.query(q, { type: sequelize.QueryTypes.SELECT });
    },
    getFilteredPartsList: (filter) => {
        let q = Querys.GET_APPLICATION_PART_LIST_NEW.replace('@@brand', filter.brand).replace('@@model', filter.model);
        if (filter.year && !isNaN(filter.year)) {
            q = q + " and YEAR_INI <= " + filter.year + " and YEAR_FIN >= " + filter.year
        }

        if (filter.inputFilterText) {
            q = q + " and paa.DESCRIPCION like '%" + filter.inputFilterText + "%'"
        }

        console.log('/*********************', q)
        return sequelize.query(q, { type: sequelize.QueryTypes.SELECT });
    },
    post: () => { }
}

module.exports = AplicacionesActRepository;