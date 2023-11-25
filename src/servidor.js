require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');


const router = require('./routes/UsuarioRoutes.js');
const autenticacionRouter = require('./routes/AutenticacionRoute.js');
const ArchivosRoutes = require('./routes/ArchivosRoutes.js');

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

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});



