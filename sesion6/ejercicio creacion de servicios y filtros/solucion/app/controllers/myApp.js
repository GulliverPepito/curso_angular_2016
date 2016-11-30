var myApp = angular.module('MyApp',['DirectorServiceApp','DirectorFilter']);

myApp.controller('MyAppCrtl',['$scope','DirectorService',function($scope,DirectorService){
	var directorService = new DirectorService.serviceDirector();
	
	this.directores=[];
	$scope.seleccionado="";
	
	$scope.caps="mins";
	$scope.styleButton="btn btn-default";
	$scope.changeCaps = function (){
		if ($scope.caps == "mins"){
			$scope.caps="mays";
			$scope.styleButton="btn btn-primary active";
		} else {
			$scope.caps="mins";
			$scope.styleButton="btn btn-default";
		}
	};

	function consultaDirectores (){
	console.log('consultaDirectores');
		directorService.consultaDirectores().then(function (data){
			$scope.directores = data;
			this.directores =data;
		}, function (error){
			alert(JSON.stringify(error));
		});
	};
	
	function getDirectores (){
		$scope.directores = directorService.getDirectores();
	};
	
	$scope.clean =function(){
		$scope.seleccionado="";
	};
	
	$scope.seleccionar=function(director){
		$scope.seleccionado=director;
	};
	
	$scope.save = function (director){
		console.log('adding director '+ director)
		this.directores.push(director);
	};
	
	$scope.remove = function (director){
		
			for(var i=0;i<this.directores.length;i++){
				if(this.directores[i].nombre==director.nombre){
					this.directores.splice(i,1);
					break;
				}
			}
		
		$scope.seleccionado="";
	};
	
	
	//getDirectores();
	consultaDirectores();
		
}]);