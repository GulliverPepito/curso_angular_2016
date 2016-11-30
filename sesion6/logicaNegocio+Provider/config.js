(function(myModule) {
	function config(frameworkProviderProvider) {
		frameworkProviderProvider.setPath('frameworks.json');
	}
	myModule.config(config);
}(angular.module("myModule")));