(function(myApp) {
	controller.$inject=["myService","$scope"];
	function controller(myService,$scope) {
		
		var param='param';
		myService.getData(param).success(function(data) {
			$scope.collection=data;
			$scope.collection.splice(0,0,{"id":"0","name":"Select user"});
			$scope.model=$scope.model||{};
			$scope.model.name="Select user";
		});

		$scope.changeUser= function(user) {
			console.log(user);
		};

	}
	myApp.controller("myController", controller);
}(angular.module("myApp")));
