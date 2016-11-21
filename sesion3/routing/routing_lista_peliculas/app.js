angular
  .module("miApp", ["ngRoute"])
  .config(["$routeProvider", function($routeProvider){
    $routeProvider
      .when("/", {
        controller: "MiAppController",
        templateUrl: "home.html"
      })
      .when("/peliculas", {
        controller: "MiAppController",
        templateUrl: "peliculas.html"
      })
	  .when("/detalle/:idPelicula", {
        controller: "DetalleController",
        templateUrl: "detalle.html"
	
      })
  }])
  .factory("peliculasFactory", function(){
    var pelis = [];
    return {
      peliculas: pelis,
      crearPelicula: function(nueva){
        pelis.push(nueva);
      }
    }
  })
  .controller("MiAppController", ["peliculasFactory","$scope", function(peliculasFactory,$scope){
    $scope.nuevaPeli = "";
    $scope.peliculas = peliculasFactory.peliculas;

    $scope.agregaPeli = peliculasFactory.crearPelicula;
  }])
  .controller("NavController",["$scope", function($scope){
    $scope.enlace = "peliculas";
  }])
  .controller("DetalleController",['$scope',"$routeParams",
  function($scope,$routeParams) {
	$scope.params= angular.copy($routeParams);
  }]);
