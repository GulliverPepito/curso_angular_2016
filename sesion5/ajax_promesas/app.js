var myApp = angular.module('myApp', []);


myApp.controller("studentsController",['$scope','$http','usersService',function ($scope, $http,usersService) {

	    console.log(usersService);

            $scope.loadData = function () {
                $http.get("data.json").success(function (data) {
                  	$scope.students = data;
                });
            }

	   $scope.loadDataPromesas = function () {
		console.log(usersService);
                usersService.getData().then(function(data) {
			console.log('data'+data[0]);
                  	$scope.students = data[0];
                });
            }
        }]);

