var Cancha = require('../entidades/cancha.js');
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

     return self;
});
module.exports=CanchaNegocio;


