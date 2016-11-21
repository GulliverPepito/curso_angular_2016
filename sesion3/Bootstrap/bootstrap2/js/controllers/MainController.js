app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Libros mas vendidos'; 
  $scope.promo = '500';
  $scope.products = [ 
  { 
    name: 'The Book of Trees', 
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    cover: 'img/the-book-of-trees.jpg',
    likes: 0,
    dislikes: 0
  }, 
  { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg' ,
    likes: 0,
    dislikes: 0
  }, 
  { 
    name: 'Cien años de soledad', 
    price: 15, 
    pubdate: new Date('2015', '06', '06'), 
    cover: 'img/cien-anos-de-soledad.jpg' ,
    likes: 0,
    dislikes: 0
  },
  { 
    name: 'El Tunel', 
    price: 10, 
    pubdate: new Date('1995', '06', '06'), 
    cover: 'img/el-tunel.jpg' ,
    likes: 0,
    dislikes: 0
  }  
]
$scope.plusOne = function(index) { 
  $scope.products[index].likes += 1; 
};
$scope.minusOne = function(index) { 
  $scope.products[index].dislikes += 1; 
};






}]);


