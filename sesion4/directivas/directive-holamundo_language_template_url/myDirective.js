(function(myApp) {
	function directive() {
			return {
				restrict:'E',
				templateUrl:function(element,attrs){
					if(attrs.language==='es'){
						return 'es.html';
					}else{
						return 'en.html';
					}
				},
				replace:true
			};
		
	}
	myApp.directive("myDirective", directive);
}(angular.module("myApp")));