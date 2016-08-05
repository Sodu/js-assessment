exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
	var p = new Promise(function(resolve, reject){
		//asynchrnous code goes here
		
			if(value){
			  resolve(value);
			}else{
			 reject(value);
			}
		
	});
	
	return p;
  },

  manipulateRemoteData: function(url) {
	  var  p = new Promise(function (resolve,reject){
		  var request = new  XMLHttpRequest();
		  var fullUrl = "http://127.0.01:4444/" +url;
		  request.open("GET",fullUrl);
		  request.onload = function(){
			  if(request.status == 200 ){
				  var responseArray = JSON.parse(request.response).people;
				  var arrayOfNames = [];
				  for(var i =0;i<responseArray.length; i++){
					  arrayOfNames.push(responseArray[i].name);
				  }
				  resolve(arrayOfNames.sort());
			  }else {
				  reject(Error(request.statusText));
			  }
			  
		  };
		  request.onerror = function (){
			reject(Error(" we have encountered error"));
		  };
		  
		  request.send();
		  
		  
	  });
	  return p;

  }
};
