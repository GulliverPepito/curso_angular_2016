var myApp = angular.module('myApp', []);

myApp.controller('RegistrationController', ['$scope', function($scope) {

  $scope.validPassword=false;
  
  $scope.$watchGroup(['user.password','user.password2'],function(nuevo,anterior){
			if(!nuevo) return;
			console.log(nuevo[0]);
			console.log(nuevo[1]);
			if(nuevo[0]===nuevo[1]){
				$scope.validPassword =true;
			}else{
				$scope.validPassword =false;
			}
			if(typeof(nuevo[0])==='undefined'){
				$scope.validPassword =false;
			}
			if(typeof(nuevo[1])==='undefined'){
				$scope.validPassword =false;
			}
			console.log($scope.validPassword);
  });
		
  $scope.register = function() {
    $scope.message = 'Welcome ' + $scope.user.firstname;
	console.log($scope.user);
  };

}]);