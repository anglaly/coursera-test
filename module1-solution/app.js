(function () {
'use strict';

angular.module('FoodApp', [])

.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];

function LunchController($scope) {
  $scope.list = "";
  $scope.message = "";
  $scope.CheckLunch = function () {

    $scope.numberItems = CalculateNumberOfItems($scope.list.toString().trim());
    switch($scope.numberItems)
    {
      case 0:
          $scope.message ="Please enter data first";
          break;
      case 1:
      case 2:
      case 3:
          $scope.message ="Enjoy!";
          break;
      default:
          $scope.message ="Too Much!";
    }
};

function CalculateNumberOfItems(string) {
  if (string)
  {
    var res = string.split(",");
    return res.length;
  } else {
    return 0;
  }

};

}



})();
