(function(myApp) {
	controller.$inject=[];
	function controller() {
		var vm = this;
		vm.helloWorld = function() {
			console.log("Hello World!!!");
		};
	}
	myApp.controller("myController", controller);
}(angular.module("myApp")));