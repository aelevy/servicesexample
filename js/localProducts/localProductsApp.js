angular.module("localService", ["ngRoute"])
     .config(function ($routeProvider){
       $routeProvider
        .when("/productLocal",{
          templateUrl:"views/localProducts/list.html",
          controller:"localProdCtrl"
        })
        .when("/productLocal/cart",{
          templateUrl:"views/localProducts/cart.html",
          controller:"localProdCtrl"
        })




        .when("/productLocal/admin",{
          templateUrl:"views/localProducts/adminview/list.html",
          controller:"localProdCtrl"
        })
        .when("/productLocal/admin/new",{
          templateUrl:"views/localProducts/adminview/create.html",
          controller:"localProdCtrl"
        })
        .when("/productLocal/admin/cart",{
          templateUrl:"views/localProducts/adminview/cart.html",
          controller:"localProdCtrl"
        })
        .when("/productLocal/:idx",{
          templateUrl:"views/localProducts/show.html",
          controller:"localProdCtrl"
        })
        .when("/productLocal/admin/:idx",{
          templateUrl:"views/localProducts/adminview/show.html",
          controller:"localProdCtrl"
        })
        .when("/productLocal/admin/:idx/edit",{
          templateUrl:"views/localProducts/adminview/edit.html",
          controller:"localProdCtrl"
        })
     });
