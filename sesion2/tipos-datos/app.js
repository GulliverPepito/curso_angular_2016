var app = angular.module('miApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.texto="hola";
  $scope.entero=7;
  $scope.bool = true;
  $scope.fecha = new Date();
  $scope.decimal=3.1;

  
  $scope.typeof=function(dato) {
    return typeof(dato);
  }
  
  $scope.instanceOfDate=function(obj) {
    return (obj  instanceof Date);
  }
});