var Cancha = require('../entidades/cancha.js');
var Equipo = require('../entidades/equipo.js');
var CanchaNegocio=(function(){
    var self=Object.create({});

     
      var lista=[];
        self.listado=function(){
          var ent=null;
            if(lista.length){
		          return lista;
		     };
		     
                 for (i=0;i<50;i++){
		
		             ent=new Cancha();
                     ent.setNombre('Cancha '+i);
		             lista.push(ent);
                    };
                     return lista;
                
         };
		 
		 
		 self.obtener=function(id){
		
					  
			  var c=new Cancha();
			   c.setNombre('Cancha '+id);
			   
			   //for (j=1;j<5;j++){
				//   can=new Cancha();
				//   can.setNombre('Cancha '+j);
				//   c.getCanchas().push(can);
			   // };
				return c;
			
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
module.exports=CanchaNegocio;


