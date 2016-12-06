angular.module('BookService', []).factory('Book', ['$http', function($http) {
	return{
		getBooks: function(){
			$http.get('/Books').success(function(response){
	    		console.log("I got the data I requested");
	    		//scope.books = response;
	    		//console.log("after: "+response);
	    		return response;
	    	});
		}
	};
}]);