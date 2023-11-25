const UsuarioModel = require('../models/UsuarioModel.js')

const UsuariosController = {}

/*const lista_usuarios = [
    { nombre: 'juan' },
    { nombre: 'carlos' }
];*/

// ver usuarios
UsuariosController.verUsuarios = async (req, res) => {
    try {
        const lista_usuarios = await UsuarioModel.findAll();
        return res.json(lista_usuarios);
    } catch (error) {
        return res.status(500).json({
            mensaje: "Ocurrio un error interno",
            error: "error",
        });
    }

}

// ver usuario
UsuariosController.verUsuario = (req, res) => {
    return res.json({ mensaje: "ruta ver usuario" });
}
// crear usuario
UsuariosController.crearUsuario = (req, res) => {
    return res.json({ mensaje: "ruta crear usuario" });
}
// editar usuario
UsuariosController.editarUsuario = (req, res) => {
    return res.json({ mensaje: "ruta editar usuario" });
}
// eliminar usuario
UsuariosController.eliminarUsuario = (req, res) => {
    return res.json({ mensaje: "ruta eliminar usuario" });
}

module.exports = UsuariosController;