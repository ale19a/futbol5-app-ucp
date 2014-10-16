var Equipo = require('../entidades/Equipo.js');

var EquiposNegocio=(function(){
    var self=Object.create({});

     //var j = require('../entidades/Jugador.js');

     
      var equipoArray = [];
      self.listado=function(){
        

        var e = null;
        if (equipoArray.length){
          return equipoArray;

        };

       for (var i = 1; i <= 100; i++){
        e = new Equipo();
        e.setNombre('Equipo: ' + i);
        equipoArray.push(e);

       };

             return equipoArray;
      }



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
module.exports=EquiposNegocio;


