var miAplic = angular.module("miAplic",[]);
miAplic.factory("post", function(){
var servicio = {
objeto: {titulo: "Escribe el TITULO",
fecha:"Escribe la FECHA",
contenido:"Escribe el CONTENIDO"},
mensajeInicial: function(){
servicio.objeto["titulo"] = "Escribe el TITULO";
servicio.objeto["fecha"] = "Escribe la FECHA";
servicio.objeto["contenido"] = "Escribe el CONTENIDO";
},
tituloNuevo: function(msj){
servicio.objeto.titulo = msj;
},
fechaNuevo: function(msj){
servicio.objeto.fecha = msj;
},
contenidoNuevo: function(msj){
servicio.objeto.contenido = msj;
}
};
return servicio;
});

miAplic.controller("ControladorTitulo",
function($scope,post){

$scope.titulo = function(){
post.tituloNuevo($scope.tituloMensaje);
};
$scope.dato = post.objeto;
});

miAplic.controller("ControladorFecha",
function($scope,post){

$scope.fecha = function(){
post.fechaNuevo($scope.fechaMensaje);
};
$scope.dato = post.objeto;
});

miAplic.controller("ControladorContenido",
function($scope,post){

$scope.contenido = function(){
post.contenidoNuevo($scope.contenidoMensaje);
};
$scope.dato = post.objeto;
});
miAplic.controller("ControladorReset",
function($scope,post){
$scope.reset = function(){
post.mensajeInicial();
};
});

	

