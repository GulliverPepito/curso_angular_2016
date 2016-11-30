var myApp = angular.module('myApp', [
  'ngRoute',
  'booksController'
]);

myApp.filter('customLowerCase',function(){
	return function(item){
		return item.toLowerCase();
	}
});

myApp.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $routeProvider.
  when('/', {
    templateUrl: '/partials/list.html',
    controller: 'ListController',
	resolve:{
		initialData:function(booksService){
			return booksService.getBooks();
		}
	}
  }).
  when('/details/:itemId', {
    templateUrl: '/partials/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/'
  });
  
  // use the HTML5 History API
	$locationProvider.html5Mode({
	enabled: true,
	requireBase: false
	});
}]);