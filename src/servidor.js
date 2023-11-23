require('dotenv').config();

const express = require('express');
const router = require('./routes/UsuarioRoutes');

const app = express();
const PORT = process.env.PORT;


app.get('/', (req, res) => {
    res.send('Hola mundo!');
});


app.use(router);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});



