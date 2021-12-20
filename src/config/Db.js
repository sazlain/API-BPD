const { Sequelize, DataTypes, QueryTypes } = require('sequelize-v5');
const sequelize = new Sequelize(process.env.DB_DIALECT + '://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME);


try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


module.exports = { sequelize, DataTypes, QueryTypes };