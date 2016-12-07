angular.module('BookCtrl', []).controller('BookController', function($scope, Book) {

	$scope.tagline = 'Get all books!!!';

	console.log("Hello world from book controller");
	// Callback method for fetching data from service
	Book.getBooks(function(books) {
      $scope.books = books;
    });

	$scope.IsAvailable= function(isAvailable){
        return (isAvailable) ? 'available' : 'not-available';
    }
});