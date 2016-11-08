angular.module("exampleApp", [])
    .controller("defaultCtrl", function ($scope, $log) {

        $scope.counter = 0;

        $scope.incrementCounter = function () {
            $scope.counter++;
        }
    });
