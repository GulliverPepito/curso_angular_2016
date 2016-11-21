angular.module("miDirectiva", [])

.controller("miControlador", function($scope) {

$scope.tarjeta1 = {
titulo: "Directivas Angular",
contenido: "bienvenidos al tutorial" ,
pie: "Tutorial AngularJS"
};
$scope.tarjeta2 = {
titulo: "Elementos html",
contenido: "Personalizar directivas" ,
pie: "nos vemos en el siguiente"
};
})

.directive("miTarjeta", function() {

return{
restrict:'E',
scope:{
tarjetaVariable: '=tarjeta'
},
templateUrl:'mi-tarjeta.html'
}
})