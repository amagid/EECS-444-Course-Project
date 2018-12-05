const Sequelize = require('sequelize');
let db = require('../services/mysql').getConnection();

const Users = module.exports = db.define('users', {

});