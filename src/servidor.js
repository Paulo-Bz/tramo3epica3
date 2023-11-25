require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');

const { TestConnection } = require('./config/SequelizeConfig.js');
const router = require('./routes/UsuarioRoutes.js');
const autenticacionRouter = require('./routes/AutenticacionRoute.js');
const ArchivosRoutes = require('./routes/ArchivosRoutes.js');
const GeorefRoutes = require('./routes/GeorefRoutes.js');

const app = express();
const PORT = process.env.PORT;


app.get('/', (req, res) => {
    res.send('Hola mundo!');
});
// Midleware
app.use(bodyParser.json());
app.use(fileupload());


app.use(router);
app.use(autenticacionRouter);
app.use(ArchivosRoutes);
app.use(GeorefRoutes);




app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    TestConnection();
});



