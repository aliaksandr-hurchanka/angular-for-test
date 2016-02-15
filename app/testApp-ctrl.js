"use strict";

module.exports = function ($scope) {

    $scope.hello = 55;
    $scope.spices = [{"name":"pasilla", "spiciness":"mild"},
                    {"name":"jalapeno", "spiceiness":"hot hot hot!"},
                    {"name":"habanero", "spiceness":"LAVA HOT!!"}];
 
   $scope.spice = "habanero";
};
