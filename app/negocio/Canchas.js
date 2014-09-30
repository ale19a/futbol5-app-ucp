var Canchas=(function(){
    var self=Object.create({});

     var canch = require('../entidades/cancha.js');
       var lista=[];
        self.listado=function(canch){
         var ent=null;

        for (i=0;i<3;i++){
		
		  ent=new canch();
           ent.setNombre=('Cancha N '+i);
		   lista.push=(ent);
        };
             return lista;
        };
     

     return self;
});
module.exports=Canchas;


