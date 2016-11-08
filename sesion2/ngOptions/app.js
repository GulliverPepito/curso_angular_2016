var app = angular.module('miApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.usuarios = [
    {
      idUsuario:34,
      nombre:"Juan",
      ape1:"Gonzalez"
    },
    {
      idUsuario:46,
      nombre:"Ana",
      ape1:"Morales"
    },
    {
      idUsuario:62,
      nombre:"Sara",
      ape1:"Diaz"
    },
    {
      idUsuario:18,
      nombre:"Marcos",
      ape1:"Ortega"
    } 
  ]
  $scope.usuarioSeleccionado=null;
});
