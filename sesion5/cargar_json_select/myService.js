(function(myApp) {
	service.$inject = ['$http'];
	function service($http) {
		this.getData = function(){
			return $http.get('data.json');
		}
	}
	myApp.service("myService", service);
}(angular.module("myApp")));