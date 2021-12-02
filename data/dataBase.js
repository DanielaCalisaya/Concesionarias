let fs = require('fs');

module.exports = { //Este objeto exporta dos propiedades y un método 
    getSucursales : JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8')),// getSucursales parsea lo que viene del JSON
    getAutos : JSON.parse(fs.readFileSync('./data/autos.json', 'utf-8')),// getAutos parsea el JSON de autos
    writeJson : (dataBase) => { //Recibe una base de dato o array y lo escribe en el JSON y le aplica el método stringify
        fs.writeFileSync('./data/concesionarias.json', JSON.stringify(dataBase), "utf-8")
    },
}

