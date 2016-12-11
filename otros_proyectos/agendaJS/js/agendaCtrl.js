app.controller("agendaCtrl", function ($scope) {

  $scope.contactos = [
    { name: 'contacto', email: 'contacto@domain.com', phone: '989898' }
  ];

  $scope.nuevo = { name: '', email: '', phone: '' };

  $scope.nuevoContacto = function () {
    if ($scope.nuevo.name !== '' && $scope.nuevo.email !== '' && $scope.nuevo.phone !== '') {
      $scope.contactos.push(angular.copy($scope.nuevo));
      $scope.nuevo = { name: '', email: '', phone: '' };
    }
  };

  $scope.borrarContacto = function (index) {
    $scope.contactos.splice(index, 1);
  };

});
