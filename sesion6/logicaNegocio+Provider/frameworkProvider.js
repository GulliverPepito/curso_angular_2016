(function(myModule){
	function provider(){

		var path;
		this.setPath=function(paramPath){
			path = paramPath;
        };
		
		this.$get = ['$http', function($http) {
			return {
				getAll: function() {
					console.log('path '+path)
					return $http.get(path);
				}
			};
		}];
	}
	myModule.provider('frameworkProvider',provider);
}(angular.module('myModule')));