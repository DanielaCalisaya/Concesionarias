let express = require('express');
let router = express.Router();
let controller = require('../controllers/adminController');

router.get('/', controller.adminIndex);
router.get('/sucursales', controller.sucursales);

module.exports = router;