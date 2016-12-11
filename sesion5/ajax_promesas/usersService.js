(function(myApp){
	function service(usersProvider){
		this.getData=function(){
			//return usersProvider.getData();
			var promise = usersProvider.getData().then(
				function(response){
					console.log('response.service'+response);
					return response;
				},
				function(error){
					alert('Ocurrió un error.Refresque navegador');
				}
			);
			console.log('Promise'+promise);
			return promise;
		};
	}
	myApp.service('usersService',service);
}(angular.module('myApp')));
