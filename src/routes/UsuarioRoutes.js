const router = require('express').Router();
const {
    verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
} = require('./../controllers/UsuariosController')

// ver usuario
router.get('/usuarios', verUsuarios);

// ver usuario
router.get('/usuario', verUsuario);

// crear usuario
router.post('/usuario', crearUsuario);

// editar usuario
router.put('/usuario', editarUsuario);

// eliminar usuari
router.delete('/usuario', eliminarUsuario);



module.exports = router;