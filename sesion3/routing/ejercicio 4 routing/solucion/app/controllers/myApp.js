var myApp = angular.module('MyApp',['DirectorServiceApp','DirectorFilter','TableDirectiveApp']);

myApp.controller('MyAppCrtl',['$scope','DirectorService',function($scope,DirectorService){
	var directorService = new DirectorService.serviceDirector();

	$scope.tablaDirectores={
			data:[],
			seleccionar:function(director){
				$scope.seleccionado=director;
			},
			changeCaps:function (){
				if ($scope.tablaDirectores.caps == "mins"){
					$scope.tablaDirectores.caps="mays";
					$scope.tablaDirectores.styleButton="btn btn-primary active";
				} else {
					$scope.tablaDirectores.caps="mins";
					$scope.tablaDirectores.styleButton="btn btn-default";
				}
			},
			filtrado:"",
            seleccionado:"",
			styleButton:"btn btn-default",
			caps:"mins"
	};
	
	function consultaDirectores (){
	console.log('consultaDirectores');
		directorService.consultaDirectores().then(function (data){
			$scope.tablaDirectores.data =data;
		}, function (error){
			alert(JSON.stringify(error));
		});
	};
	
	function getDirectores (){
		$scope.tablaDirectores.data = directorService.getDirectores();
	};
	
	$scope.clean =function(){
		$scope.seleccionado="";
	};
	
	$scope.seleccionar=function(director){
		$scope.seleccionado=director;
	};
	
	$scope.save = function (director){
		console.log('adding director '+ director)
        $scope.tablaDirectores.data.push(director)
	};
	
	$scope.remove = function (director){
		
			for(var i=0;i<$scope.tablaDirectores.data.length;i++){
				if($scope.tablaDirectores.data[i].nombre==director.nombre){
					$scope.tablaDirectores.data.splice(i,1);
					break;
				}
			}
		
		$scope.seleccionado="";
	};
	
	
	//getDirectores();
	consultaDirectores();
		
}]);