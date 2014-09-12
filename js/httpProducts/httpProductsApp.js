angular.module("httpModule", ["ngRoute"])
     .config(function ($routeProvider){
       $routeProvider
        .when("/productHttp",{
          templateUrl:"views/httpProducts/adminview/list.html",
          controller:"httpProdCtrl"
        })
        // .when("/productLocal/cart",{
        //   templateUrl:"views/localProducts/cart.html",
        //   controller:"localProdCtrl"
        // })
          .when("/productHttp/edit", {
           templateUrl:"views/httpProducts/adminview/edit.html",
           controller:"httpProdCtrl"
          })
          .when("/productHttp/create", {
           templateUrl:"views/httpProducts/adminview/create.html",
           controller:"httpProdCtrl"
          })
          .when("/productHttp/:id", {
          templateUrl:"views/httpProducts/adminview/show.html",
          controller:"httpProdCtrl"
        })
})
