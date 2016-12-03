(function(myApp) {
	service.$inject = ['$http'];
	function service($http) {
		this.getData = function(param){
			alert(param);
			return $http.get('data.json');
		}
	}
	myApp.service("myService", service);
}(angular.module("myApp")));
