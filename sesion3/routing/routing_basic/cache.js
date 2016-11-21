(function(myApp) {
	cache.$inject = ["$templateCache","$rootScope"];
	function cache($templateCache,$rootScope) {
		$rootScope.$on("$routeChangeSuccess",function(){
			if($templateCache.info().size>3){
				$templateCache.removeAll();
			}
		})
	}
	myApp.run(cache);
}(angular.module("myApp")));