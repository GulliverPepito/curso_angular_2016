var app = angular.module("app", []);

alert("Parando la aplicación para que se vea el icono de que no se ha podido cargar la imagen")

app.controller("PruebaController", function($scope) {
  $scope.fileName = "dokuwiki-128.png";
});