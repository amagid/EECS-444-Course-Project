const Sequelize = require('sequelize');
const config = require('../../config');
const logger = require('./logger');

module.exports = {
    connect,
    getConnection,
    getAliases
};

let _connection;

function connect(force = false) {
    if (!_connection || force) {
        const db = config.get().db;
        _connection = new Sequelize(db.name, db.username, db.password, {
            host: 'localhost',
            dialect: 'mysql',
            dialectOptions: {
              multipleStatements: true
            },
            pool: {
                max: 1,
                min: 0,
                idle: 10000
            }
        });

        return _connection.authenticate()
            .then(function (err) {
                logger.info('Connection has been established successfully.');
                return _connection;
            })
            .catch(function (err) {
                logger.error('Unable to connect to the database:', err);
                throw err;
            });

    } else {
        return Promise.resolve(_connection);
    }
}

function getConnection() {
    return _connection;
}

function getAliases(city) {
    return _connection.query("SELECT alias FROM aliases WHERE city='" + city + "';")
        .then(result => {
            const output = [];
            for (let resultList of result[0]) {
                if (Array.isArray(resultList)) {
                    for (let alias of resultList) {
                        output.push(alias.alias);
                    }
                } else {
                    output.push(resultList.alias);
                }
            }
            return output;
        });
}