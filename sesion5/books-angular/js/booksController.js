angular.module('booksController', [])

.controller('ListController', ['$scope','initialData', 
function($scope,initialData) {
    $scope.books = initialData;
    $scope.bookOrder = 'name';
}])

.controller('DetailsController', ['$scope','$routeParams','booksService', function($scope,$routeParams,booksService) {
  booksService.getBooks().then(function(data) {
    $scope.books = data;
    $scope.bookItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.books.length-1;
    }

    if ($routeParams.itemId < $scope.books.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);

