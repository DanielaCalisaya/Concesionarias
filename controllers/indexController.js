let { getSucursales} = require('../data/dataBase.js'); // Aqui haré el destructuring

let controller = {
    index: function(req, res) {
        //Voy al index.js y de ahi tomo el callback
        res.render('index', { 
            sucursales: getSucursales 
        })
    }
}

module.exports = controller;