let express = require('express');
let router = express.Router();
let controller = require('../controllers/sucursalesController')


/* GET home page */
router.get('/:id', controller.sucursal); 
//El método sucursal me va a ofrecer información de una sucursal



module.exports = router;