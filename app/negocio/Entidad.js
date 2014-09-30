var Entidad=(function(){
    var self=Object.create({});

     var canch = require('../entidades/cancha.js');
       var lista=[];
        self.listado=function(canch){
        

        for (i=0;i<3;i++){
		
		  ent=new canch();
           ent.setNombpredio=('Cancha Nº '+i);
		   lista.push=(ent);
        }
             return lista;
        }
     

     return self;
});
module.exports=Entidad;


