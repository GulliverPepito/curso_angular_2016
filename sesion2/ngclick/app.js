var app = angular.module('miApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.nombre="My name is";
  $scope.ape1="apellidos";
  
  
  $scope.getNombreCompleto=function() {
    return $scope.ape1 + "," + $scope.nombre;
  };
  
  $scope.changeNombre=function(name) {
    $scope.nombre = name;
  };
  
  
  
});

