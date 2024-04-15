const express = require('express');

const pruebasR = require('./pruebasR.js');

function routerApi(app) {
    const router = express.Router();
    app.use('/entrevistaTecnica/dev/',router);
    router.use('/pruebas',pruebasR);
}

module.exports = routerApi;