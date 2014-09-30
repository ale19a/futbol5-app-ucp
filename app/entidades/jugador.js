var Jugador = (function(){
	var self = Object.create({});

	//Atributos y metodos Obcionales
	var nombre;
	self.getNombre=function (){
		return nombre;
	};
    self.setNombre=function (valor){
		nombre=valor;
	};
	
	var edad;
	self.getEdad=function(){
	   return edad;
	};
	self.setEdad=function(valor){
	  edad=valor;
	};
	
	var posicion;
	self.getPosicion=function (){
		return posicion;
	};
    self.setPosicion=function (valor){
		posicion=valor;
	};	

	var califjug;
	self.getCalifjug=function(){
		return califjug;
	};
	
	self.setCalifjug=function(valor){
	    califjug=valor;
	};
	self.toString=function(){
		return self.getNombre();
	};
		
	return self;
});
module.exports = Jugador;