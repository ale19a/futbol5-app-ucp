var express = require('express');
var router = express.Router();


var CanchaNegocio = require('../negocio/CanchaNegocio.js');




/* POST Canchas */
router.get('/', function(req, res) {
	//var canchaArray=[];
	var cn = new CanchaNegocio();
   res.render('canchas',{canchas:cn.listado()});
	
 
});



/* POST Buscador */
router.get('/buscar', function(req, res) {

	
	var listafilt = [];
	var en = new CanchaNegocio();

	//Buscar si viene el parametro "q" por querystring, sino listado completo
	if (req.query.q!=null && req.query.q.length) {
		listafilt = en.buscar(req.query.q);
	}else{
		listafilt = en.listado();
	}

  res.render('canchas', 
  			{canchas:listafilt,
  			 mensaje:'Demo de Mensaje',
  			 query:req.query.q});
});


/* POST Detalle */
router.get('/detalle', function(req, res) {

	
	var cancha = null;
	var cn = new CanchaNegocio();

	//Buscar si viene el parametro "q" por querystring, sino listado completo
	if (req.query.id!=null && req.query.id.length) {
		cancha = cn.obtener(req.query.id);
	}

  res.render('canchaDetalle',
  			{cancha:cancha});
});



module.exports = router;
