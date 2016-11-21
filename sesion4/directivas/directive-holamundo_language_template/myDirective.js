(function(myApp) {
	function directive() {
			return {
				restrict:'E',
				template:function(element,attrs){
					if(attrs.language==='es'){
						return '<div>Hola mundo</div>';
					}else{
						return '<div>Hello world</div>';
					}
				},
				replace:true
			};
		
	}
	myApp.directive("myDirective", directive);
}(angular.module("myApp")));