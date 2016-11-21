(function(myApp) {
	controller.$inject=['$scope'];
	function controller($scope) {
		var vm = this;
		vm.helloWorld = function() {
			console.log("Hello World!!!");
		};
		$scope.message="hw";
	}
	myApp.controller("myController", controller);
}(angular.module("myApp")));