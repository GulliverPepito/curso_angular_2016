var uazonApp = angular.module("uazonApp",['ngRoute','libros']);

uazonApp.config(
	function($routeProvider)
	{
		$routeProvider
		.when('/listado',
		{
			templateUrl:'src/views/listado.html',
			controller: 'LibrosCtrl'
		})
		.when('/nuevo-libro',
		{
			templateUrl:'src/views/nuevo-libro.html',
			controller: 'LibrosFichaCtrl'
		})
		.when('/ficha-libro/:tituloLibro',
		{
			templateUrl:'src/views/ficha-libro.html',
			controller: 'LibrosFichaCtrl'
		})
		.otherwise( {redirectTo: '/listado'});
	}
);
