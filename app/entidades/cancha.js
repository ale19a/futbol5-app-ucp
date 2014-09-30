var Cancha = (function(){
	var self = Object.create({});

	//Atributos y metodos Obcionales
	
	var nombre;
	self.getNombre=function(){
	    return nombre;
	};
	self.setNombre=function(valor){
	    nombre=valor;
	};
		
	var lugar;
	self.getLugar=function (){
		return lugar;
	};
    self.setLugar=function (valor){
		lugar=valor;
	};
	
	var horario;
	self.getHorario=function(){
	    return horario;
	};
	self.setHorario=function(valor){
	   horario=valor;
	};
	
	var reserva;
	self.getReserva=function (){
		return reserva;
	};
    self.setReserva=function (valor){
		reserva=valor;
	};
	
	var tipocesp;
	self.getTipocesp=function(){
	    return tipocesp;
	};
    self.setTipocesp=function(valor){
	    tipocesp=valor;
	};
	self.toString=function(){
        return self.getNombre();
	};
	
	return self;
});
module.exports = Cancha;