let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

/* Enrutadores */
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let sucursalesRouter = require('./routes/sucursales');
let autosRouter = require('./routes/autos'); 
let adminRouter = require('./routes/admin'); 

let app = express();

/* EJS - view engine setup */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
/* Para recuperar los datos enviados, lo hacemos a partir del atributo body del objeto request. 
Pero antes es necesario indicarle a Express que vamos a trabajar con JSON y que la información 
la envíe en el formato correcto. Para eso es necesario ejecutar dos líneas de código mediante 
el método use del objeto app (linea 25 y 26)*/
app.use(express.json());//Escribirlas arriba de los middlewares de rutas
app.use(express.urlencoded({ extended: false }));//Estas dos lineas se necesitan para poder capturarlas, express generator ya las trae
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Middlewares de rutas */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sucursal', sucursalesRouter);
app.use('/autos', autosRouter);  
app.use('/admin', adminRouter)

/*
app.get('/autos', function(req, res) {
  res.send
})  Esto estabamos haciendo antes
*/

// catch 404 and forward to error handler -> Middleware(si no encuentra la ruta te tira este error)
app.use(function (req, res, next) { //Controlan la informacion y generan una accion frente a eso
  //Si esta todo bien en vez de generar una respuesta lo pasa a otro nivel
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
