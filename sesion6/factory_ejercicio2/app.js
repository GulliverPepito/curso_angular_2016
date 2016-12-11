var miAplic = angular.module("miAplic",[]);

miAplic.config(function($provide){

	$provide.provider('MathServiceProvider',function(){
		this.$get =function(){

			var factory={};
			factory.multiply=function(a,b){
				return a*b;
			}
			return factory;
			
		};
	});

});

miAplic.factory("MathService", function(){

	var factory={};
	factory.multiply=function(a,b){
		return a*b;
	}
	return factory;

});


miAplic.service("CalcService", function(MathService){

	this.square=function(a){
		return MathService.multiply(a,a);
	}
});

miAplic.controller("CalcController", function($scope,CalcService){

	$scope.square=function(){
		$scope.result=CalcService.square($scope.number);
	}
});

	

