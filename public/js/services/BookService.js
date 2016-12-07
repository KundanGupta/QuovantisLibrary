angular.module('BookService', []).factory('Book', function($http) {
	
	// Callback method for fetching data from server
	return{
		getBooks: function(books){
			$http.get('/Books').success(books);
		}
	};
	
});