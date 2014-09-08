angular.module("babyAmazon")
    .controller("homeCtrl", function ($scope,$log) {
        $scope.greeting = "Angular Services Demo";
        $log.info("home view loaded");
    });
