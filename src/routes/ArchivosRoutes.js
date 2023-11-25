const ArchivosRoutes = require('express').Router();

const { subirArchivo } = require('./../controllers/ArchivosController')


ArchivosRoutes.post('/subirArchivo', subirArchivo);










module.exports = ArchivosRoutes;