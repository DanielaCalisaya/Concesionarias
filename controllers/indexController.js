let controller = {
    index: function(req, res) {
        //Voy al index.js y de ahi tomo el callback
        res.render('index', { title: 'Daniela' })
    }
}

module.exports = controller;