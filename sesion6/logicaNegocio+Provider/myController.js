(function(myModule){

	function controller($scope,frameworkService){
		$scope.model = $scope.model || [];
		frameworkService.getAll().then(function(data) {
			$scope.model = data;
		});
	}
	myModule.controller('myController',controller);
}(angular.module("myModule")));