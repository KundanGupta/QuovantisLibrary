angular.module('BookCtrl', []).controller('BookController', function($scope, Book) {

	$scope.tagline = 'Get all books!!!';	



	console.log("Hello world from book controller");


	$scope.books = Book.getBooks();
});