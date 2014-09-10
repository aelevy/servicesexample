angular.module("babyAmazon")
    .controller("homeCtrl", function ($scope,$log) {
        $scope.greeting = "You Wot m8?";
        $log.info("home view loaded");
    });
