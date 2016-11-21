(function(myApp) {
	function controller($scope) {
		$scope.enviar = function() {
			if ($scope.form.$valid) {
				console.log($scope.model);
			}
		};
	}
	myApp.controller("myController", controller);
}(angular.module("myApp")));