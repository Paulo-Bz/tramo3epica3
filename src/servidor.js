const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hola mundo!');
});

app.get('/usuarios', (req, res) => {
    res.send('Lista de usuarios');
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

