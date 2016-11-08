var myApp = angular.module('MyApp',[]);

myApp.controller('MyAppCrtl',['$scope',function($scope){
	$scope.message = "Hola Mundo!!!";
	
	$scope.showMessage = function (message){
		alert("Valor del mensaje: " + message);
	};
}]);