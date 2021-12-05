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
        let lastId = 1;
        getSucursales.forEach(sucursal => {
            if(sucursal.id > lastId){
                lastId = sucursal.id
            } //El forEach recorrera el id y preguntara si la sucursal tiene su id mayor que lasId, osea 1
        });

        let nuevaSucursal = {
            id: lastId + 1,
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
        let idSucursal = +req.params.id;
        /* res.send(req.body) prueba */
        const {nombre, direccion, telefono} = req.body; 

        getSucursales.forEach(sucursal => {
            if(sucursal.id === idSucursal) {
                sucursal.id = sucursal.id, //Estamos modificando una propiedad de un objeto
                sucursal.nombre = nombre,
                sucursal.direccion = direccion,
                sucursal.telefono = telefono,
                sucursal.imagen = sucursal.imagen //Con esto estariamos reemplazando todos los datos el objeto que queremos modificar
            }
        })

        writeJson(getSucursales) //No hacemos push porque no estamos agregando sino modificando
        res.redirect('/admin/sucursales')
    },
    fatality: (req, res) => {
        let idSucursal = +req.params.id;

        getSucursales.forEach(sucursal => {
            if(sucursal.id === idSucursal){
                let sucursalAEliminar = getSucursales.indexOf(sucursal) // El indexOf nos traia el indice del elemento que nosotros le pasemos por parámetro dentro de un array
                getSucursales.splice(sucursalAEliminar, 1) //Traemos el array completo de las sucursales, como primer parámetro el indice de la sucursal que queremos eliminar y como segundo parámetro la cantidad de elementos a eliminar(1 o mas)
            }
        })

        writeJson(getSucursales) 
        res.redirect('/admin/sucursales')
    }
}



module.exports = controller;