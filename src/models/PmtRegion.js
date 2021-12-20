const { sequelize, DataTypes } = require('../config/Db');

const PmtRegiones = sequelize.define('PMT_REGIONES', {
    // Model attributes are defined here
    REGION_ID: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    REGION_NAME: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    CURRENCY_ID: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    TAX_ID: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    LANGUAGE_ID: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    ALMACEN_ID: {
        type: DataTypes.STRING,
        primaryKey: true,
        // allowNull defaults to true
    }
}, {
    sequelize, timestamps: false, freezeTableName: true
});

module.exports = PmtRegiones;