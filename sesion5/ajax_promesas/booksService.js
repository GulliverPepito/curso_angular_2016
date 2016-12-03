(function(myApp){
	function service($http,$q,booksProvider){
		this.getBooks=function(){
			return booksProvider.getBooks();
			var promise = booksProvider.getBooks().then(
				function(response){
					return response.data;
				},
				function(error){
					alert('Ocurrió un error.Refresque navegador');
					//return $q.reject(error);
				}
			);
			console.log('Promise'+promise);
			return promise;
		};
	}
	myApp.service('booksService',service);
}(angular.module('myApp')));