(function(myModule){
	function service($http,$q,frameworkProvider){
		this.getAll=function(){
			var promise = frameworkProvider.getAll().then(
				function(response){
					return response.data;
				},
				function(response){
					return $q.reject(response);
				}
			);
			console.log('Promise'+promise);
			return promise;		
		};
	}
	myModule.service('frameworkService',service);
}(angular.module('myModule')));
