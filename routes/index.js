let express = require('express');
let router = express.Router();
let controller = require('../controllers/indexController')

/* GET home page */
router.get('/', controller.index); //Funciona igual que antes, solo que aquí modularizo y lo llamo

module.exports = router;