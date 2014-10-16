var express = require('express');
var router = express.Router();

var Login = require('../negocios/Login.js');
var Entidad = require('../negocios/Entidad.js');
var Equipo = require('../entidades/Equipo.js');
var Cancha = require('../entidades/Cancha.js');
var Jugador = require('../entidades/Jugador.js');
var Polimorfismo = require('../negocios/Polimorfismo.js');
var JugadoresNegocio = require('../negocios/JugadoresNegocio.js');
var CanchasNegocio = require('../negocios/CanchasNegocio.js');
var EquiposNegocio = require('../negocios/EquiposNegocio.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Futbol 5' });
});

/* GET Login */
router.get('/login', function(req, res) {
  res.render('login', { mensajeError: '' });
});

/* POST Login */
router.post('/login', function(req, res) {
	//Recuperando datos del formulario
	var usuario = req.body.usuario;
	var password = req.body.password;

	//Instanciando Login
	var login = new Login();
	var esValido = login.validar(usuario,password);

	if (esValido) {
		res.render('Index');
	}else{
		res.render('login', { mensajeError: 'Datos incorrectos. Verifique.' });
	};
 
});

/* GET Jugadores */
router.get('/Jugadores', function(req, res) {
	var jr = new JugadoresNegocio();

   res.render('jugadores', {jugadores: jr.listado()});
	
 
});


/* POST Buscador Equipo */
router.get('/buscar', function(req, res) {

	
	var listafilt = [];
	var eq = new EquipoNegocio();

	//Buscar si viene el parametro "q" por querystring, sino listado completo
	if (req.query.q!=null && req.query.q.length) {
		listafilt = en.buscar(req.query.q);
	}else{
		listafilt = en.listaEquipo();
	}

  res.render('equipo', 
  			{equipo:listafilt,
  			 mensaje:'Demo de Mensaje',
  			 query:req.query.q});
});


/* GET Canchas */
router.get('/Canchas', function(req, res) {
	var can = new CanchasNegocio();

   res.render('canchas', {canchas: can.listado()});
	
 
});


/* GET Equipos */
router.get('/Equipos', function(req, res) {
	var equi = new EquiposNegocio();

   res.render('equipos', {equipos: equi.listado()});
	
 
});




/* GET Polimorfismo */
router.get('/Polimorfismo', function(req, res) {
	var p = new Polimorfismo();

   res.render('polimorfismo', {polimorfismo: p.listaVarios()});
	
 
});

module.exports = router;
