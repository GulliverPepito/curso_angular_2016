app.controller('AppCtrl',['$scope','users', function($scope, users){
	users.success(function(data) {
		$scope.usersList = data;
	})
}]);