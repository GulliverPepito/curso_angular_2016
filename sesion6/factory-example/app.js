var app = angular.module('app22', []);

app.factory("firstfactory", function() {
  return {
    name: "my first angular factory",
    name2: "my angular factory2"
  };
})

app.factory("secondfactory", function($http, $q) {
  return function() {
    var defobj = $q.defer();
    $http.get("iphone.json").success(function(data) {
        defobj.resolve({
          data: data
        });
      })
      .error(function() {
        defobj.resolve({
          data: false
        });
      });
    return defobj.promise;
  }
})

app.controller('Controller', function($scope, firstfactory, secondfactory) {

  $scope.name = firstfactory.name2;
  $scope.error=false;

  var result=secondfactory();
  result.then(function(output){
    $scope.ObjectArray=output.data;
    if(output.data==false){
	alert('error');
	$scope.error=true;
	}
  });

  

});
