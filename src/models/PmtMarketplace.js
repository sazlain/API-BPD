const { sequelize, DataTypes } = require('../config/Db');
const PmtRegiones = require('./PmtRegion');

const PmtMarketplace = sequelize.define('PMT_MARKETPLACES', {
    // Model attributes are defined here
    CODIGO: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
    },
    QTY: {
        type: DataTypes.BIGINT
        // allowNull defaults to true
    },
    MARKETPLACE: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        // allowNull defaults to true
    },
    PRICE: {
        type: DataTypes.DOUBLE
        // allowNull defaults to true
    },
    REGION: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    UDATE: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    UD_TASKS: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    UD_DETAILS: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    STATUS: {
        type: DataTypes.INTEGER
        // allowNull defaults to true
    }
}, {
    sequelize, timestamps: false, freezeTableName: true
});

module.exports = PmtMarketplace;