var tableDirectiveApp = angular.module("TableDirectiveApp",[]);

tableDirectiveApp.directive('myTable',function(){
	return{
		restrict:'A',
        
		templateUrl:'./app/templates/templateTable.html',
		scope:{
			tablaInfo:'=tabInfo'
		}
	};
});