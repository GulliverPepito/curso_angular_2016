var router = angular.module('Router',['ngRoute','MyApp','MenuApp']);

router.config(function($routeProvider){
	console.log('route');
	$routeProvider.when('/',{
		templateUrl:"./app/templates/barraMenu.html",
		abstract:true,
		controller:"menuCrtl"
	}).when('/consultaDirectores',{
		templateUrl:"./app/templates/plantillaDirectores.html",
		controller:"MyAppCrtl"
	});
});