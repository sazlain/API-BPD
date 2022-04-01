const { sequelize } = require('../config/Db');
const Querys = require('../../src/resources/querys')

const AplicacionesActRepository = {
    getModelsByBrand: (data) => {
        const q = Querys.GET_CAR_MODELS_LIST.replace('@@year', data.year).replace('@@region', data.region).replace('@@brand', data.brand);
        console.log(q)
        return sequelize.query(q, { type: sequelize.QueryTypes.SELECT });
    },
    getBrandsByYear: (data) => {
        console.log(data)
        const q = Querys.GET_CAR_BRAND_LIST_BY_YEAR.replace('@@year', data.year).replace('@@region', data.region);
        console.log(q)
        return sequelize.query(q, { type: sequelize.QueryTypes.SELECT });
    },
    getFilteredPartsList: (filter) => {
        let q = Querys.GET_APPLICATION_PART_LIST_NEW.replace('@@year', filter.year).replace('@@region', filter.region).replace('@@brand', filter.brand).replace('@@model', filter.model);

        if (filter.inputFilterText) {
            q = q + " and paa.DESCRIPCION rlike ('";
            const filterWords = filter.inputFilterText.split(' ');
            if (filterWords.length == 1) {
                q = q + "(.*" + filterWords[0] + ")";
            } else {

                filterWords.forEach((word, index) => {
                    if (index == 0) {
                        q = q + "(.*" + word + ")";
                    } else {
                        q = q + "|(.*" + word + ")";
                    }



                })
            }

            q = q + "')";
        }

        return sequelize.query(q, { type: sequelize.QueryTypes.SELECT });
    },
    post: () => { }
}

module.exports = AplicacionesActRepository;