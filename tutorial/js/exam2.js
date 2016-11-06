var app2 = angular.module('app2', []);

app2.controller('ctrl1', function($scope) {

  $scope.randomNum1 = Math.floor((Math.random() * 10) + 1);
  $scope.randomNum2 = Math.floor((Math.random() * 10) + 1);

});

// Define multiple controllers
app2.controller('badCtrl', function($scope) {
  var badFeelings = ["Disregarded", "Unimportant", "Rejected", "Powerless"];

  $scope.bad = badFeelings[Math.floor((Math.random() * 4))];
});

app2.controller('goodCtrl', function($scope) {
  var goodFeelings = ["Pleasure", "Awesome", "Lovable", "Inner Peace"];

  $scope.good = goodFeelings[Math.floor((Math.random() * 4))];
});
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
var app2 = angular.module('app2', []);
 
app2.controller('ctrl1', function($scope) {
 
  $scope.randomNum1 = Math.floor((Math.random() * 10) + 1);
  $scope.randomNum2 = Math.floor((Math.random() * 10) + 1);
 
});
 
// Define multiple controllers
app2.controller('badCtrl', function($scope) {
  var badFeelings = ["Disregarded", "Unimportant", "Rejected", "Powerless"];
 
  $scope.bad = badFeelings[Math.floor((Math.random() * 4))];
});
 
app2.controller('goodCtrl', function($scope) {
  var goodFeelings = ["Pleasure", "Awesome", "Lovable", "Inner Peace"];
 
  $scope.good = goodFeelings[Math.floor((Math.random() * 4))];
});