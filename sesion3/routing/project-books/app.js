var app = angular.module("app", ['ngRoute']);

app.value("imagen", "angularjs.png");

app.run(["$rootScope", "imagen",function($rootScope, imagen) {
    $rootScope.imagen = imagen;
}]);

app.config(['$routeProvider',function($routeProvider) {

  this.books=[{
		"idBook": 1,
		"isbn": "12345678Z",
		"editorial": "Editorial",
		"name": "AngularJS",
		"date": "01/01/2016",
		"type": {
			"science": true,
			"technical": false,
			"literature": false
		}
		},
		{
		"idBook": 2,
		"isbn": "12345678Z",
		"editorial": "Editorial",
		"name": "Angular2",
		"date": "11/11/2016",
		"type": {
			"science": false,
			"technical": true,
			"literature": false
		}
		}
		];
  
  $routeProvider.when('/', {
    templateUrl: "partials/main.html",
    controller: "MainController"
  }); 
 
  $routeProvider.when('/books/list', {
    templateUrl: "partials/list.html",
    controller: "ListBooksController",
    resolve: {
      books:[function() {
		return this.books;
        
      }]
    }
  });
     
  $routeProvider.when('/book/edit/:idBook', {
    templateUrl: "partials/details.html",
    controller: "DetailsBookController",
    resolve: {
      book:['$route',function($route) {
	   //$route.current.params.idBook
	  for(var i=0;i<this.books.length;i++){
		if(this.books[i].idBook==$route.current.params.idBook){
			return this.books[i];
		}
	  };
      }]
    }
  });
   
  $routeProvider.otherwise({
        redirectTo: '/'
  });   
 
}]);
 

app.controller("DetailsBookController", ['$scope', 'book',function($scope, book) {

    $scope.filtro = {
      name: ""
    }

    $scope.book = {
      isbn: "",
      name: "",
      editorial: "",
      type: {
        science: false,
        technical: false,
        literature: false
      },
      date: new Date()
    }

    $scope.book = book;


  $scope.guardar=function() {
    if ($scope.form.$valid) {
		console.log($scope.form);
      alert("Los datos aqui se habrían enviado al servidor  y estarían validados en la parte cliente");
    }else {
      alert("Hay datos inválidos");
    }
  }

}]);

app.controller("ListBooksController", ['$scope', 'books',function($scope, books) {
    $scope.books = books;
}]);

app.controller("MainController", ['$scope',function($scope) {

}]);