angular.module('eventApp')
.directive('myDirective',function(){

	return {
		restrict:'EAC',
		template:'<b>This is my first directive'
	}
	
})
.directive('highlight',function(){

	return {
		restrict:'A',
		replace:true,
		scope:true,
		template:'<b><span class="label label-info">{{name}}</span></b>',
		link:function(scope,elem,attrs){
			scope.name=attrs.eventname;
			console.log(attrs.eventname);
		}
	}
	
});