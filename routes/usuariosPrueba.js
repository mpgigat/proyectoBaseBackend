const {Router} = require('express');
const {usuariosPruebaGet,usuariosPruebaPost,usuariosPruebaPut,usuariosPruebaDelete}=require('../controllers/usuariosPrueba');
const router=Router();


router.get('/',       usuariosPruebaGet);
router.post('/',      usuariosPruebaPost);
router.put('/:id',    usuariosPruebaPut);
router.delete('/:id', usuariosPruebaDelete);

module.exports=router;