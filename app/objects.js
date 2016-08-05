exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
	obj.sayIt = fn;
	return obj.sayIt();
  },

  alterObjects: function(constructor, greeting) {
	constructor.prototype.greeting = greeting;
	
  },

  iterate: function(obj) {
	  var array = [];
	  for(var prop in obj){
		  if(!obj.hasOwnProperty(prop)){
			  continue;
		  }
		  array.push(prop+ ": " +obj[prop]);
		  
	  }
	  return array;

  }
};
