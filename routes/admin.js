let express = require('express');
let router = express.Router();
let controller = require('../controllers/adminController');


/* Ruta por get devuelve el home */
router.get('/', controller.adminIndex);
/* get - me trae las sucursales */
router.get('/sucursales', controller.sucursales);
/* get - formulario de descarga, solo me lo muestra, entonces es por get */
router.get('/agregarSucursal', controller.create)
/* post - recibe datos del formulario*/
router.post('/agregarSucursal', controller.store)



module.exports = router;