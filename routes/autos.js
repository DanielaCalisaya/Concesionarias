let express = require('express');
let router = express.Router();
let controller = require('../controllers/autosController.js');

// GET - Lista de autos
router.get('/', controller.autos);
// GET - Detalle de auto
router.get('/detalle/:id', controller.autos)


module.exports = router;