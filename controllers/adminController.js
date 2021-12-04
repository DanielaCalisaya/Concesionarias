let { getAutos, getSucursales, writeJson } = require('../data/dataBase');

let controller = {
    adminIndex: (req, res) => {
        res.render('admin/adminIndex')
    },
    sucursales: (req, res) => {
        res.render('admin/adminSucursales', {
            sucursales: getSucursales,
            autos: function (idSucursal) {
                return getAutos.filter(auto => auto.sucursal === idSucursal)
            }
        })
    },
    create: (req, res) => {
        res.render('admin/agregarSucursal')
    },
    store: (req, res) => {
        /* res.send(req.body) asi que me devolveria los datos pero en formato json */
        let lasId = 1;
        getSucursales.forEach(sucursal => {
            if(sucursal.id > lasId){
                lastId = sucursal.id
            } //El forEach recorrera el id y preguntara si la sucursal tiene su id mayor que lasId, osea 1
        });

        let nuevaSucursal = {
            id: lasId + 1,
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            imagen: "sucursal.jpg"
        }

        getSucursales.push(nuevaSucursal); //Si ponemos solo esta linea, se escribira pero no se guardará en nuestra base de datos y quedará
        writeJson(getSucursales) //Lo escribe en el Json
        res.redirect('/admin/sucursales') //Después de cargar los datos quiero que vayan a esa vista
    },
    edit: (req, res) => {
        let idSucursal = +req.params.id;

        let sucursal = getSucursales.find(sucursal => sucursal.id === idSucursal);

        res.render('admin/editarSucursal', {
            sucursal
        })

    },
    update: (req, res) => {

    }
}



module.exports = controller;