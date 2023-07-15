
const{ Router }= require('express');
const { usurariosGet, usuariosPut, usuariosPost, usuariosPath, usuariosDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/', usurariosGet )
router.put('/:id', usuariosPut)
router.post('/', usuariosPost )
router.patch('/', usuariosPath)
router.delete('/', usuariosDelete)

module.exports= router;