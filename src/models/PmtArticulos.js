const { sequelize, DataTypes } = require('../config/Db');

const PmtArticulos = sequelize.define('PMT_ARTICULO', {
    // Model attributes are defined here
    ID_EMPRESA: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    CODIGO: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    NUM_INV: {
        type: DataTypes.BIGINT
        // allowNull defaults to true
    },
    CODIGO_OEM: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    GRUPO: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    SUBGRUPO: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    NOMBRE: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    REFERENCIA: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    MARCA: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    UNIDAD: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    CODIGO_PROVEEDOR: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    COSTO: {
        type: DataTypes.DOUBLE
        // allowNull defaults to true
    },
    PRECIO1: {
        type: DataTypes.DOUBLE
        // allowNull defaults to true
    },
    PRECIO2: {
        type: DataTypes.DOUBLE
        // allowNull defaults to true
    },
    PRECIO3: {
        type: DataTypes.DOUBLE
        // allowNull defaults to true
    },
    PRECIO_REFERENCIA: {
        type: DataTypes.DOUBLE
        // allowNull defaults to true
    },
    EXISTENCIA: {
        type: DataTypes.DOUBLE
        // allowNull defaults to true
    },
    ID_REGION: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    sequelize, timestamps: false, freezeTableName: true
});

//PmtAplicacionesAct.belongsTo

module.exports = PmtArticulos;