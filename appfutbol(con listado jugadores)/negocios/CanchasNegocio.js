var Cancha = require('../entidades/Cancha.js');

var CanchasNegocio=(function(){
    var self=Object.create({});

     
      var canchaArray=[];
        self.listado=function(){

          var c=null;
            if(canchaArray.length){
		          return canchaArray;
		     };
		     
                 for (i=0;i<50;i++){
		
		             c=new Cancha();
                     c.setNombre('Cancha '+i);
		             canchaArray.push(c);
                    };
                     return canchaArray;
                
         };

        self.buscar = function(generico){
	    var entidadesFiltradas = [];
	     //Obtiene la lista de un metodo que devuelve todos los objetos sin filtrar
	    var lista = self.listado();
	     var e = null;
	
	     //Buscando (NOTA: En el nombre)
	     //Metodo indexOf
	     for (var i = 0; i<lista.length; i++) {
		 e = lista[i];
		  if (e.getNombre().indexOf(generico) > -1) {
			entidadesFiltradas.push(e)
		 };
	 };

	     //Retornando el array con las entidades filtradas
	     return entidadesFiltradas;
}	
     return self;
});
module.exports=CanchasNegocio;


