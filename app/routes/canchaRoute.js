var express = require('express');
var router = express.Router();


var CanchaNegocio = require('../negocio/CanchaNegocio.js');




/* POST Canchas */
router.get('/', function(req, res) {
	//var canchaArray=[];
	var cn = new CanchaNegocio();
   res.render('canchas',{canchas:cn.listado()});
	
 
});



module.exports = router;
