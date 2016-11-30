(function(myApp) {
	function config(booksProviderProvider) {
		booksProviderProvider.setPath('/data/data.json');
	}
	myApp.config(config);
}(angular.module("myApp")));