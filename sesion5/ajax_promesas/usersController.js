angular.module('usersController', [])

.controller("studentsController",["usersService", function ($scope,usersService, $http) {

		//$scope.="fdf";
		console.log('controller');
            $scope.loadData = function () {
                $http.get("data.json").success(function (data) {
                  	$scope.students = data;
                });
            }

	   $scope.loadDataPromesas = function (usersService) {
		alert('data');
                usersService.getData.then(function(data) {
                  	$scope.students = data;
                });
            }
        }]);

