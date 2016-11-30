angular.module('eventApp',['ngRoute','ngMockE2E'])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

	$routeProvider.when('/add-event',{
		templateUrl:'views/add-event.html',
		controller:'eventController',
		controllerAs:'eventController'
	}).when('/',{
		templateUrl:'views/event-list.html',
		controller:'eventController',
		controllerAs:'eventController'
	})
	.when('/home',{
		templateUrl:'views/home.html',
		controller:'eventController',
		controllerAs:'eventController'
	}).
	otherwise({redirectTo:'/'});
	
	  // use the HTML5 History API
	$locationProvider.html5Mode({
	enabled: true,
	requireBase: false
	});

	
}]);