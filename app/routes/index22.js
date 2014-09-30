var express = require('express');
var router = express.Router();

var Login = require('../futbol5/Login.js');
var CanchaNegocio = require('../futbol5/CanchaNegocio.js');
var MostrameTostring = require('../futbol5/MostrameTostring.js');

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
		res.render('Entidad');
	}else{
		res.render('login', { mensajeError: 'Datos incorrectos. Verifique.' });
	};
 
});


/* POST Canchas */
router.get('/Canchas', function(req, res) {
	//var canchaArray=[];
	var cn = new CanchaNegocio();
   res.render('canchas',{canchas:cn.listado()});
	
 
});

/* POST ToString*/
router.get('/ToString', function(req, res) {
var cn = new MostrameTostring();
   res.render('varios',{varios:cn.listado()});
 
});

module.exports = router;
