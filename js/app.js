angular.module("babyAmazon",["localService","app.directives", "ngRoute"])

.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "views/main.html",
            controller: "homeCtrl"
        })

       });
