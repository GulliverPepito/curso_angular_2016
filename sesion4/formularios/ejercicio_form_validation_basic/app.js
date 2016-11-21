(function(angular) {
angular.module('app', []).controller("FormController",function($scope){

	$scope.userName="username";
	
	this.submitForm=function() {
		console.log('Form submmited '+$scope.userName+" "+$scope.userAge)
	};

	
})
}(angular));