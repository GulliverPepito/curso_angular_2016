var menuApp = angular.module("MenuApp",[]);

menuApp.controller('menuCrtl',['$scope','$http',function($scope,$http){
	
	$scope.barra={
			  "name":"Directores de cine",
			  "menus":[{
			    "name":"Directores",
			    "options":[{
			      "name":"Consulta directores",
			      "href":"#/consultaDirectores"
			    }]
			  }]
			};
}]);