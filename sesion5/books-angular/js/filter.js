(function(myApp) {	
	myApp.filter('customUpperCase',function(){
		return function(item){
			return item.toUpperCase();
		}
	});
}(angular.module("myApp")));