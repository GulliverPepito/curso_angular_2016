app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
	{
      name: 'Bruschetta',
      description: 'Grilled bread garlic.',
      price: 4.95
    }
  ];
  
  $scope.mains = [
    {
      name: 'Marguerita',
      description: 'Mozzarella, marinara sauce.',
      price: 6.95
    },
    {
      name: 'Pepperoni',
      description: 'Pepperoni,marinara sauce,fresh oregano.',
      price: 7.95
    },
	{
      name: 'Rustica',
      description: 'Mozzarella,marinara sauce,roasted garlic,fresh oregano.',
      price: 8.95
    }
  ];
  
  $scope.extras = [
    {
      name: 'BreadSticks',
      description: 'served with marinara sauce.',
      price: 4.95
    },
    {
      name: 'Soup of the day',
      description: 'Try it.',
      price: 4.95
    },
	{
      name: 'Buffalo wings',
      description: 'Feel the power of wings.',
      price: 4.95
    }
  ];

}]);