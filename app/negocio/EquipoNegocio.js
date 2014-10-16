var equipo=require('../entidades/equipo.js');
var jugador=require('../entidades/jugador.js');

var EquipoNegocio=(function(){
    var self=Object.create({});

     
      var lista=[];
	 
        self.listaEquipo=function(){
			var ent=null;
			var ju=null;
			
			if(lista.length){
				  return lista;
			};	  
		   
			for (i=0;i<10;i++){  
			   ent=new equipo();
			   ent.setNombre('Equipo '+i);
			   
			   for (j=0;j<5;j++){
				   ju=new jugador();
				   ju.setNombre('Jugador '+j);
				   ent.getJugadores().push(ju);
			    };
				
			    lista.push(ent);
			 };
			 
			 return lista;  
				
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
    };	
     return self;
});
module.exports=EquipoNegocio;


