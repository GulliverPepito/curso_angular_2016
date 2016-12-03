app.controller('AppCtrl',['$scope','users', function($scope, users){
	users.success(function(data) {
		$scope.usersList = data;
	})
	users.error(function(data) {
		alert('error'+data);
	})
}]);
