const express = require('express');
const mountAPI = require('./api');

module.exports = addRoutes;

function addRoutes(router) {
    const api = express.Router();
    mountAPI(api);
    
    router.use('/api', api);

    router.get('/', (req, res) => res.sendFile(__dirname + "/main.html"));
    router.get('/css', (req, res) => res.sendFile(__dirname + "/main.css"));
    router.get('/js', (req, res) => res.sendFile(__dirname + "/main.js"));
};