(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
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
    var total = 0;
    for (var i = 0; i < res.length; i++) {
      if (res[i]!="")
      {
        total = total + 1;
      }
    }
    return total;
  } else {
    return 0;
  }

};

}



})();
