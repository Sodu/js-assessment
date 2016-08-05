exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
	var charArray = str.split('');
	var duplicates = [];
	var string = '';
	
	
	for(var i=0; i<charArray.length -1; i++){
		var repeat="";
		if(i==0 && charArray[i]!== charArray[i+1]){
			string += charArray[i];
		}
		if(i==0 && charArray[i] == charArray[i+1] ){
			repeat = charArray[i].repeat(amount);
			string += repeat;
		}
		if(charArray[i] !== charArray[i+1]){
			//if(duplicates.indexOf(charArray))
			repeat = charArray[i+1].repeat(amount); 
			string += repeat;
		}
		
		
		/* for reducing the dulicates
		var duplicate = false;
		for(var j=0;j<charArray.length; j++){
			if(charArray[i] == charArray[j] && i!=j){
				duplicate = true;
				break;
			}
			
		}
		var repeatChar ='';
		if(duplicate){
			if(duplicates.indexOf(charArray[i]) == -1){
				duplicates.push(charArray[i]);
				repeatChar = charArray[i].repeat(amount);
				string += repeatChar;
			}
			
		}else if(!duplicate){ 
			string += charArray[i];
		}*/
		
	}
	return string;
  
	
  },

  wordWrap: function(str, cols) {
	  'abcdef abcde abc def',
      'abc abc abc',
      'a b c def'
	var array =str.split("");
	var string="";
	var regExArray = [];
	for(var i=0; i<array.length ; i++){
		if(i!= array.length-1){
			if(array[i-1] == " " && array[i] !== " " &&  array[i+1] !==" "){
				//array[i-1] = "\n";
				regExArray[i-1] = "\n";
				regExArray[i]= array[i];
			}else{
				regExArray[i] = array[i];
			}
		}else{
			regExArray[i]=array[i];
		}
		
		
	}
	for(var i=0;i<regExArray.length; i++){
		string += regExArray[i];
		
	}
	console.log(regExArray.toString());
	return string;
	   

  },

  reverseString: function(str) {
	var array = str.split("");
	var reversedArray=[];
	var string="";
	for(var i= array.length-1; i>=0; i --){
		string += array[i];
	}
	return string;
  }
};
