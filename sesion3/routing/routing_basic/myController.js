(function(myApp) {
	controller.$inject=["$routeParams","$scope"];
	function controller($routeParams,$scope) {
		$scope.params= angular.copy($routeParams);
	}
	myApp.controller("myController", controller);
}(angular.module("myApp")));