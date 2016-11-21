var restServiceApp = angular.module('DirectorServiceApp',[]);

restServiceApp.factory('DirectorService',['$http','$q',function($http,$q){
	
	function ServiceJSON (){
		
		this.consultaDirectores = function (){
			var defer = $q.defer();
			var finalUrl = 'data.json';
			
			$http.get(finalUrl).success(function(data){
				defer.resolve(data);
			}).error (function(error){
				defer.reject(error);
			});
			
			return defer.promise;
		};
		
		this.getDirectores = function (){
			return  [{
				nombre:"Clint",
				apellidos:"Eastwood"},
				{
				nombre:"Guillermo",
				apellidos:"Del toro"},
				{
				nombre:"Steven",
				apellidos:"Spielberg"}
				]
		};
		
	}
	
	return {'serviceDirector':ServiceJSON};
}]);