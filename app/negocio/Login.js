var Login = (function(){
	var self = Object.create({});

	self.validar = function(u, p){
		return ((u==p)&&(u.length>=4));
	}	

	return self;
});
module.exports = Login;