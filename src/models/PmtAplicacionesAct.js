const { sequelize, DataTypes } = require('../config/Db');
const PmtMarketplace = require('./PmtMarketplace');

const PmtAplicacionesAct = sequelize.define('PMT_APLICACIONES_ACT', {
    // Model attributes are defined here
    NUM_REG: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
    },
    CODIGO: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    APLICACION: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    DESCRIPCION: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    YEAR_INI: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    YEAR_FIN: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    sequelize, timestamps: false, freezeTableName: true
});

//PmtAplicacionesAct.belongsTo

module.exports = PmtAplicacionesAct;