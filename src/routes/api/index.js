module.exports = function mountAPI(router) {
    router.get('/', (req, res) => res.promise('Up and running!'));

    router.get('/aliases', (req, res) => res.promise([1, 2, 3, 4, 5, 6, 7, 8, 9]));
};