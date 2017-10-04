var demoApp = angular.module('Skillex', [
  // Dépendances du "module"
  'main'
]);

var app = angular.module('main', []);

app.controller('MainCtrl', ['$scope', '$window', function($scope, $window) {
  $scope.role = $window.role;
  function checkRole() {
    alert ($scope.role);
    }; // Just function body, no need of semicolon
  $scope.getRole = function(id) {
    $scope.role = $window.role;
 return $scope.role;
  };
  

 app.controller('AppCtrl', function ($scope,$window) {
  // set the default value of our number
  $scope.myNumber = window.role;
  
    // function to evaluate if a number is even
    $scope.isEven = function() {
  
      if ($scope.role == 'pilote')
        return true;
      else 
        return false;
      
    };

});
}]);
