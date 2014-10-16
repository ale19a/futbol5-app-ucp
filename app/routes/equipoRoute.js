var express = require('express');
var router = express.Router();


var EquipoNegocio = require('../negocio/EquipoNegocio.js');



/* POST Equipo */
router.get('/', function(req, res) {
	
	var eq = new EquipoNegocio();
   res.render('equipo',{equipo:eq.listaEquipo()});
	
 
});


/* Detalle */

router.get('/detalle', function(req, res) {
	var equipo=null;
	if (req.query.id != null && req.query.id.length) {
		var en=new EquipoNegocio();
		equipo=en.obtener(req.query.id);
	}
	res.render('equipoDetalle', 
  			{equipo:equipo});
 
});



/* POST Buscador */
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



module.exports = router;
