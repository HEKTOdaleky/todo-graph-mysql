const Sequelize = require('sequelize');

const DB_NAME = 'node';
const USER_NAME = 'root';
const PASSWORD = 'combo52z';

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;