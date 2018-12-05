const mysql = require('../../services/mysql');

module.exports = function mountAPI(router) {
    router.get('/', (req, res) => res.promise('Up and running!'));

    router.get('/aliases', (req, res) => res.promise(mysql.getAliases(req.query.city)));
};