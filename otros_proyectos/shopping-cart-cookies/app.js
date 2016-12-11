var app = angular.module('shoppingCart', ['ngRoute','ngCookies']);

app.controller('ProductsController', ['$scope','$cookieStore', '$http', function($scope,$cookieStore, $http) {

  $http.get("products.json").success(function(data) {
    $scope.products = data;
  }).error(function() {
    alert('error');
  });
  
  if(typeof($cookieStore.get('total')!='undefined')){
	 $scope.total=$cookieStore.get('total');
	 if($scope.total<0){
		$cookieStore.put('total', 0);
	 }
   }
  
  if(typeof($cookieStore.get('cart')!='undefined')){
	$scope.cart= $cookieStore.get('cart');
   }
   
   if(typeof($cookieStore.get('totalItems')!='undefined')){
	$scope.totalItems=$cookieStore.get('totalItems');
   }
   
  $scope.addToCart = function(product){
   
   var cart=[];

   if(($cookieStore.get('cart'))){
	cart= $cookieStore.get('cart');
   }
	console.log(cart);
	
   //add product to cart
   cart.push(product)
   $cookieStore.put('cart', cart);
   
   $scope.cart=$cookieStore.get('cart');
	
   if(typeof($cookieStore.get('total')!='undefined')){
	 $scope.total=$cookieStore.get('total');
   }
   
   $scope.total = $scope.total+product.price;
   $cookieStore.put('total', $scope.total);
   
  };
  
  $scope.deleteFromCart = function(product){
   
   var cart=[];

   if(typeof($cookieStore.get('cart')!='undefined')){
	cart= $cookieStore.get('cart');
   }

   //delete product from cart
   for (var n = 0 ; n < cart.length ; n++) {
    if (cart[n].name == product.name) {
      var removedObject = cart.splice(n,1);
      removedObject = null;
      break;
    }
	}
	
   $cookieStore.put('cart', cart);
   $scope.cart=$cookieStore.get('cart');
	   
   if(typeof($cookieStore.get('total')!='undefined')){
	 $scope.total=$cookieStore.get('total');
   }
   
   $scope.total = parseInt($scope.total-product.price);
   $cookieStore.put('total', $scope.total);
   
  };
  
	//it executes each time cart changes
	$scope.$watch('cart', function () {
	if($scope.cart){
		var totalItems=$scope.cart.length;
		$cookieStore.put('totalItems', totalItems);
		$scope.totalItems=$cookieStore.get('totalItems');
		}
   });

}]);


app.controller('DetailsController',["$scope","$http","$routeParams","$filter","$log",
function($scope,$http,$routeParams,$filter,$log){
  
  $http.get("products.json").success(function(data) {
    $scope.product = $filter("filterById")(data,$routeParams.id);
	$log.info($scope.product)
  }).error(function() {
    alert('error');
  });

  
}]);

app.config(function($routeProvider) {
  $routeProvider.when('/products', {
      templateUrl: 'products.html',
      controller:"ProductsController",
      controllerAs:"ProductsController"
    })
    .when('/', {
      templateUrl: "products.html",
      controller:"ProductsController",
      controllerAs:"ProductsController"
    })
	.when('/cart', {
      templateUrl: "cart.html",
      controller:"ProductsController",
      controllerAs:"ProductsController"
    })
    .when('/details/:id',{
      templateUrl:"details.html",
      controller:"DetailsController",
      controllerAs:"DetailsController"
    })
    .otherwise({
      redirectTo: '/'
    })
});


app.filter('filterById', function() {
  return function(objArr, id) {
    for (i=0; i<objArr.length; i++) {
      if (objArr[i].id == id) {
        return objArr[i];
      }
    }
    return null;
  }
});

