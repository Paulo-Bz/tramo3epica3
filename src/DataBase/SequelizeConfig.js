const { Sequelize } = require('sequelize');

const dbName = process.env.DB_NAME
const userName = process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST
// Conexion a base de datos..

const sequelize = new Sequelize(dbName, userName, dbPassword, {
    host: dbHost,
    dialect: 'mysql'
});

const TestConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado a la base de datos.');
    } catch (error) {
        console.error('No se conecto a la base de datos:', error);
    }
}



module.exports = { sequelize, TestConnection };

