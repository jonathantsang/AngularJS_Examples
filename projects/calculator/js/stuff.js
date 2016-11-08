
var app1 = angular.module('app1', []);
 
app1.controller('ctrl1', function($scope) {

  $scope.first = 1;
  $scope.second = 1;
  $scope.log =[];

  $scope.addValue = function() {
    $scope.calculation = $scope.first + ' + ' + $scope.second +
      " = " + (+$scope.first + +$scope.second);
    $scope.log.push($scope.calculation);
  };
  $scope.subtractValue = function() {
    $scope.calculation = $scope.first + ' - ' + $scope.second +
      " = " + (+$scope.first - +$scope.second);
    $scope.log.push($scope.calculation);
  };
  $scope.multiplyValue = function(){
    $scope.calculation = $scope.first + ' * ' + $scope.second + 
      " = " + (+$scope.first * +$scope.second);
    $scope.log.push($scope.calculation);
  };
  $scope.divideValue = function(){
    $scope.calculation = $scope.first + ' / ' + $scope.second + 
      " = " + (+$scope.first / +$scope.second);
    $scope.log.push($scope.calculation);
  };

});