var app = angular.module('miApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.listaUsuarios = [
    {
      idUsuario:34,
      nombre:"Juan",
      apellidos:"Gonzalez"
    },
    {
      idUsuario:46,
      nombre:"Ana",
      apellidos:"Morales"
    },
    {
      idUsuario:62,
      nombre:"Sara",
      apellidos:"Diaz"
    },
    {
      idUsuario:18,
      nombre:"Marcos",
      apellidos:"Ortega"
    } 
  ]
  $scope.usuarioSeleccionado=null;
});
