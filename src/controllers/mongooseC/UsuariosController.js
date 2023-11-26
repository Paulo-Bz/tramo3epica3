const UsuarioModel = require('./../../models/mongooseM/UsuarioModel');

const UsuariosController = {};



// ver usuarios
UsuariosController.verUsuarios = async (req, res) => {
    try {
        const listaUsuarios = await UsuarioModel.find();

        return res.json(listaUsuarios);

    } catch (error) {

        return res.status(500).json({

            mensaje: "Ocurrio un error interno",
            error: "error",

        });
    }

}

// ver usuario
UsuariosController.verUsuario = async (req, res) => {
    try {
        //const { id } = req.body;//=>asi es por el body
        const { id } = req.params;//=>asi es por url

        const usuariEncontrado = await UsuarioModel.findById(id);

        return res.json(usuariEncontrado);

    } catch (error) {
        let mensaje = "ocurrio un error interno al intentar obtener el usuario";

        if (error.kind === 'ObjectId') {
            mensaje = 'No se pudo obtener el usuario'
        }

        return res.status(500).json({
            mensaje: "Ocurrio un error interno",
            error: "error",
        });
    }

}
// crear usuario
UsuariosController.crearUsuario = async (req, res) => {
    try {
        const { nombres, apellidos } = req.body;
        const nuevoUsuario = new UsuarioModel({
            nombres: nombres,
            apellidos: apellidos,
        });
        await nuevoUsuario.save();

        return res.json({ mensaje: "Usuario creado correctamente" });

    } catch (error) {

        return res.status(500).json({
            mensaje: "Ocurrio un error interno al crear usuario",
            error: error
        });
    }


}
// editar usuario
UsuariosController.editarUsuario = async (req, res) => {
    try {
        const { id, nombres, apellidos } = req.body;

        await UsuarioModel.findByIdAndUpdate(
            id,
            {
                nombres: nombres,
                apellidos: apellidos,
            }
        );

        return res.json({ mensaje: "Usuario editado correctamente" });

    } catch (error) {

        return res.status(500).json({
            mensaje: "Ocurrio un error interno al editar usuario",
            error: error
        });
    }
}
// eliminar usuario
UsuariosController.eliminarUsuario = async (req, res) => {
    try {
        const { id } = req.body;

        await UsuarioModel.findByIdAndDelete(id);

        return res.json({ mensaje: "Usuario eliminado correctamente" });

    } catch (error) {

        return res.status(500).json({
            mensaje: "Ocurrio un error interno al eliminar usuario",
            error: error
        });
    }
}

module.exports = UsuariosController;