const router = require('express').Router();
const {
    verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
} = require('./../controllers/UsuariosController');

//MONGOOSE
const {
    verUsuarios: verUsuariosMongoose,
    crearUsuario: crearUsuarioMongoose,
    editarUsuario: editarUsuarioMongoose,
    eliminarUsuario: eliminarUsuarioMongoose,
    verUsuario: verUsuarioMongoose,
} = require('./../controllers/mongooseC/UsuariosController');

// ver usuarios sequelize
router.get('/usuarios', verUsuarios);

// ver usuario
router.get('/m/usuario/:id', verUsuarioMongoose);//=>asi es por url(/:id)

// crear usuario
router.post('/m/usuario', crearUsuarioMongoose);

// editar usuario
router.put('/m/usuario', editarUsuarioMongoose);

// eliminar usuario
router.delete('/m/usuario', eliminarUsuarioMongoose);


// ver usuarios mongoose
router.get('/m/usuarios', verUsuariosMongoose);


module.exports = router;