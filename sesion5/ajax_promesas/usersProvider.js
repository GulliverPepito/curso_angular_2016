(function(myModule){
	function provider(){

		this.$get = ['$http','$q', function($http,$q) {
			return {
				getData: function() {
					var users=$http.get('data.json');
					
					return $q.all([users]).then(function(result){
						var users=[];

						angular.forEach(result,function(response){
							users.push(response.data);
						});
						console.log('users'+users);
						return users;
					});
					
					
				}
			};
		}];
	}
	myModule.provider('usersProvider',provider);
}(angular.module('myApp')));
