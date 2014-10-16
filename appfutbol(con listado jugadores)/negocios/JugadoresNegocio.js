var Jugador = require('../entidades/Jugador.js');

var JugadoresNegocio=(function(){
    var self=Object.create({});

     //var j = require('../entidades/Jugador.js');

     
      var jugadorArray = [];
      self.listado=function(){
        

        var j = null;
        if (jugadorArray.length){
          return jugadorArray;

        };

       for (var i = 1; i <= 100; i++){
        j = new Jugador();
        j.setNombre('Jugador: ' + i);
        jugadorArray.push(j);

       };

             return jugadorArray;
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
module.exports=JugadoresNegocio;


