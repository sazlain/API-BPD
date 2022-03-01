const { sequelize, DataTypes } = require('../config/Db');

const PmtConfigGeneral = sequelize.define('PMT_CONFIG_GENERAL', {
    // Model attributes are defined here
    NUM_REG: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
    },
    CATEGORIA: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    VALOR: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    CAMPO1: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    CAMPO2: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    CAMPO3: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    CAMPO4: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    }
}, {
    sequelize, timestamps: false, freezeTableName: true
});

module.exports = PmtConfigGeneral;