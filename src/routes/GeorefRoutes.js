const GeorefRoutes = require('express').Router();

const { obtenerProvincias } = require('./../controllers/GeorefController');

GeorefRoutes.get('/obtenerProvincias', obtenerProvincias);



module.exports = GeorefRoutes