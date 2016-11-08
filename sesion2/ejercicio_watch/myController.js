(function(myApp) {
	controller.$inject=["$scope"];
	function controller($scope) {
		
		$scope.errorPassword =true;
		$scope.errorPassword2 =false;
		
		$scope.$watch('password',function(nuevo,anterior){
			if(!nuevo) return;
			if(nuevo.length<6){
				$scope.errorPassword =true;
			}else{
				$scope.errorPassword =false;
			}
		});
		
		$scope.$watchGroup(['password','password2'],function(nuevo,anterior){
			if(!nuevo) return;

			if(nuevo[0]===nuevo[1]){
				$scope.errorPassword2 =false;
			}else{
				$scope.errorPassword2 =true;
			}
		});


	}
	myApp.controller("myController", controller);
}(angular.module("myApp")));