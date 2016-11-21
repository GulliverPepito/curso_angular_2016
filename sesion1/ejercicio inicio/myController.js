(function(myApp) {
	controller.$inject=['$scope'];
	function controller(scope) {
		scope.name="";
		scope.surname="";
		scope.fullname=function(){
			return (scope.name + " " + scope.surname); 
		}
	}
	myApp.controller("myController", controller);
}(angular.module("myApp")));