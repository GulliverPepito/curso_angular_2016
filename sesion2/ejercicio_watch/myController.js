(function(myApp) {
	controller.$inject=["$scope"];
	function controller($scope) {
		
		$scope.errorPassword =true;
		
		$scope.$watch('password',function(nuevo,anterior){
			if(!nuevo) return;
			if(nuevo.length<6){
				$scope.errorPassword =true;
			}else{
				$scope.errorPassword =false;
			}
		});
	}
	myApp.controller("myController", controller);
}(angular.module("myApp")));