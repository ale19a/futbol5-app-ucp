var express = require('express');
var router = express.Router();

var Login = require('../negocio/Login.js');
var CanchaNegocio = require('../negocio/CanchaNegocio.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
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
	console.log(esValido);
	if (esValido) {
		res.render('index');
		
	}else{
		res.render('login', { mensajeError: 'Datos incorrectos. Verifique.' });
	};
 
});

module.exports = router;
