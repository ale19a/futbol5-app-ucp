

var Entidad=(function(){
    var self=Object.create({});

    var e = require('../entidades/Equipo.js');
    var c = require('../entidades/Cancha.js');

     var j = require('../entidades/Jugador.js');

      self.listado=function(j){
        var lista=[];

       for (i=0;i<3;i++){
          lista.push=(j.getNombre+i);
       }

             return listado;
       }

       self.listado=function(e){
        var lista=[];

       for (i=0;i<3;i++){
          lista.push=(e.getNombre+i);
       }

             return listado;
       }

       self.listado=function(c){
        var lista=[];

       for (i=0;i<3;i++){
          lista.push=(c.getNombre+i);
       }

             return listado;
       }

      
     

     return self;
});
module.exports=Entidad;


