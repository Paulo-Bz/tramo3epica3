require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/UsuarioRoutes');
const autenticacionRouter = require('./routes/AutenticacionRoute.js');

const app = express();
const PORT = process.env.PORT;


app.get('/', (req, res) => {
    res.send('Hola mundo!');
});
// Midleware
app.use(bodyParser.json());

app.use(router);
app.use(autenticacionRouter);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});



