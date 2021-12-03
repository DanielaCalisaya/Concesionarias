let { getAutos } = require('../data/dataBase');

let controller = {
    autos: (req, res) => {
        res.render('autos', {
            autos: getAutos
        })
    }
}


module.exports = controller;