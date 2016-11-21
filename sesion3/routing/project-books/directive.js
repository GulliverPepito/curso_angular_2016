app.directive('datepicker', [function(dateFormat) {
  return {
    restrict: 'A',
    link: function($scope, element, attributes) {
    
      element.datepicker({
        dateFormat: attributes.datepicker
      });
    }
  };
}]);