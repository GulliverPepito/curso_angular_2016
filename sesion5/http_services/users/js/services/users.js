app.factory('users', ['$http', function($http) {
	return $http.get('http://jsonplaceholder.typicode.com/userss')
			.success(function(data){
				return data;
			})
			.error(function(err){
				return err;
			});
}]);
