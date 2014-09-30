var Equipo = (function(){
	var self = Object.create({});

	//Atributos y metodos Obcionales
	var nombre;
	self.getNombre=function (){
		return nombre;
	};
    self.setNombre=function (valor){
		nombre=valor;
	};
	var listjug;
	self.getListjug=function (){
		return listjug;
	};
    self.setLidtjug=function (valor){
		listjug=valor;
	};
	
	var califequip;
	self.getCalifequip=function(){
	    return califequip;
	};
    self.setCalifequip=function(valor){
	    califequip=valor;
	};
	
	
	var partidganad;
	self.getPartidganad=function(){
	    return partidganad;
	};
	self.setPartidganad=function(valor){
	    partidganad=valor;
	};
	
	var partidperd;
	self.getPartidperd=function(){
	    return partidperd;
	};
	self.setPartidperd=function(valor){
	    partidperd=valor;
	};
	
	self.toString=function(){
        return self.getNombre();
	};
	return self;
});
module.exports = Equipo;