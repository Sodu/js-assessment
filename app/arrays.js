exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
	var arr = arr;
	var index = arr.indexOf(item);
	return index;
  },

  sum: function(arr) {
	var array = arr;
	var sum = array.reduce(add, 0);
	function add(a,b){
		return a+b;
	}
	return sum;
  },

  remove: function(arr, item) {
		var array =arr;
		
		for(var i = array.length -1;i>=0; i--){
			if(array[i]==item){
				
				array.splice(i,1);				
			}
		}
		return array;
  },

  removeWithoutCopy: function(arr, item) {
	  var array = arr ;
	  
		for(var i = array.length -1;i>=0; i--){
			if(array[i]==item){
				
				array.splice(i,1);				
			}
		}
		return array;

  },

  append: function(arr, item) {
	var array = arr;
	array.push(item);
	return array;

  },

  truncate: function(arr) {
	var array= arr;
	array.pop();
	return array;
  },

  prepend: function(arr, item) {
	var array = arr;
	array.unshift(item);
	return array;
  },

  curtail: function(arr) {
	arr.shift(arr[0]);
	return arr;
  },

  concat: function(arr1, arr2) {
	  return arr1.concat(arr2);

  },

  insert: function(arr, item, index) {
	var array = arr;
	array.splice(index,0,item);
	return array;
  },

  count: function(arr, item) {
	var array = arr;		
	var count = 0;
	for (var i = 0; i <array.length; i++){
		if(array[i] == item){
			count++;
		}
	  }
	return count;
  },

  duplicates: function(arr) {
	var array = arr;
	var sortedArray =[] ;
	for (var i = 0; i <array.length; i++){
		var duplicate = false;
		for(var j= 0; j<array.length;j++){
			if(array[i]== array[j] && i!=j){
				duplicate = true
				continue;
			}else{}
		}
		if(duplicate){
			if( sortedArray.indexOf(array[i])== -1){
				sortedArray.push(array[i]);
			}
		}
	 }
	return sortedArray.sort();
  },

  square: function(arr) {
	var squaredArray = [];
	for(var i = 0; i<arr.length; i ++){
		squaredArray[i] = Math.pow(arr[i],2);
	}
	return squaredArray;
  },

  findAllOccurrences: function(arr, target) {
	var occurenceIndexArray=[];
	for(var i = 0; i<arr.length; i ++){
		if(arr[i] == target){
			occurenceIndexArray.push(i);
		}
		
	}
	return occurenceIndexArray.sort();
  }
};