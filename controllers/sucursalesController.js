let { getAutos, getSucursales } = require('../data/dataBase')//destructuring

let controller = {
    sucursal: (req, res) => {
        let sucursalId = +req.params.id;//Cada sucursal en el JSON tiene su id, lo capturo|El + transformará la cadena de texto a un number

        let sucursal = getSucursales.find(sucursal => sucursal.id === sucursalId)
        //Find me devuelve un solo objeto, no un array como filter
        //Busco a partir de ese id usando el método find, si encuentra una coincidencia nos devuelve lo que encontro sino es undefined 
        if(sucursal !== undefined) {
            //Filter me devolvera una coleccion, un array de todos los datos que coincidan con esa busqueda
            let autos = getAutos.filter(auto => auto.sucursal === sucursalId)
            //Estoy haciendo una comparación estricta al poner los 3 iguales. Pero llega un numero ta tambien un string, por eso le tengo que asignar un +

            res.send(autos)

        } else {
            res.send('No encontramos la ruta seleccionada')
        }
    }
}


module.exports = controller;