angular.module("exampleApp", [])
    .controller("defaultCtrl", function ($scope, $log) {
		
	    $scope.counter = 0;
		
		var vm=this;
		vm.incrementCounter = function () {
		console.log("Hello World!!!");
            $scope.counter++;
			$log.info("counter:"+$scope.counter);
        };
		
        

        /*$scope.incrementCounter = function () {
			$log.info("counter:"+$scope.counter);
            $scope.counter++;
        };*/
    });
