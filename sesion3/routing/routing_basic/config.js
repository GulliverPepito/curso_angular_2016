(function(myApp) {
	config.$inject = ['$routeProvider'];
	function config($routeProvider) {
		$routeProvider
		.when("/",{templateUrl:'list.html'})
		.when("/edit/:id",{templateUrl:'edit.html'})
		.when("/create",{templateUrl:'create.html'})
		.when("/delete/:id",{templateUrl:'delete.html'})
		.otherwise({redirectTo:'/'});
	}
	myApp.config(config);
}(angular.module("myApp")));