var libros = angular.module("libros",[]);

libros.controller("LibrosCtrl",['$scope','$rootScope','$location',
	function($scope,$rootScope,$location)
{
	
	if(typeof($scope.libros)==='undefined'){
		$rootScope.libros = [
			{titulo:'El juego de Ender', autor:'Orson Scott Card'},
			{titulo:'I robot', autor:'Isaac Asimov'},
			{titulo:'Juego de Tronos', autor:'George R.R. Martin'}
		];
		$rootScope.numLibrosDelete = 0;
		$rootScope.numLibrosAdd = 0;
	}

	$scope.addLibro = function (){
		$rootScope.libros.push({titulo:$scope.inputData.titulo, autor:$scope.inputData.autor});
		console.log($scope.inputData.titulo);
		
		setTimeout(function(){
         $scope.$apply(function(){
             console.log($rootScope.libros);
			 $scope.changeRoute('#/listado');
			 $rootScope.numLibrosAdd++;
         }
         )
         }, 1000);
	
	};

	$scope.deleteLibro = function(indice)
	{
		$rootScope.libros.splice(indice,1);
		$rootScope.numLibrosDelete++;
	}
	
	 $scope.changeRoute = function(url, forceReload) {
        $scope = $scope || angular.element(document).scope();
        if(forceReload || $scope.$$phase) { 
            window.location = url;
        } else {
            $location.path(url);
            $scope.$apply();
        }
    };
}]);


libros.controller("LibrosFichaCtrl",['$scope','$routeParams',
	function($scope,$routeParams)
{
	$scope.tituloLibro = $routeParams.tituloLibro;
}]);
