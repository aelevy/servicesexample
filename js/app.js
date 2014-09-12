angular.module("babyAmazon",["localService","app.directives", "httpModule","ngRoute"])

.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "views/main.html",
            controller: "homeCtrl"
        })

       });
