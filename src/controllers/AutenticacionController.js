var jwt = require('jsonwebtoken');
const AutenticacionController = {}


const JWT_KEY = process.env.JWT_KEY

const usuarios = [
    { id: 1, usuario: 'lord', contraseña: '1234' },
    { id: 2, usuario: 'lady', contraseña: '5678' },
];

AutenticacionController.autenticar = (req, res) => {
    const usuario = req.body.usuario;

    // simular autenticacion
    //let token = jwt.sign({ id: 1 }, JWT_KEY);
    //var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    let token = jwt.sign({ usuario: usuario }, JWT_KEY);

    res.json({ token: token });
}


AutenticacionController.registrar = (req, res) => {
    // simular registracion
}

AutenticacionController.verificarToken = (req, res) => {
    const token = req.body.token;

    //console.log(token);

    try {
        //var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
        let desencriptado = jwt.verify(token, JWT_KEY);
        console.log(desencriptado)

        res.json({ datos: desencriptado });
    } catch (error) {
        res.status(500).json({
            mensaje: "se ha generado un error",
            error: error,
        })
    };
}


module.exports = AutenticacionController;