var app = angular.module('app22', []);

app.factory("firstfactory", function() {
  return {
    name: "my first angular factory"
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

  $scope.name = firstfactory.name;
  
  var result=secondfactory();
  result.then(function(output){
    $scope.ObjectArray=output.data;
    
  })
  

});