var Login = (function(){
	var self = Object.create({});

	self.validar = function(u, p){
		return (u==p);
	}	

	return self;
});
module.exports = Login;