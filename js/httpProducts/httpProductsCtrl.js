angular.module("httpModule")
    .controller("httpProdCtrl",function ($rootScope, $scope, $routeParams, $location, httpService){

     httpService.getProducts().then(function(products){
      $scope.products = products.data;
     });

     httpService.findProductByIdx($routeParams.id).then(function(response){
      $scope.singleProduct = response.data;
     });



      $scope.addProduct = function (product) {
       httpService.addProduct(product).then(function(){
       $location.path("/productHttp");
      });
      };

      $scope.updateProduct = function (product) {
       httpService.updateProduct(product).then(function() {
       $location.path("/productHttp");
      });
     };

      $scope.deleteProduct = function (id)  {
       httpService.deleteProduct(id).then(function(){
        httpService.getProducts().then($location.path("/productHttp"));
       });
      };

      // $scope.addToCart = function (product){
      //  localProductSvc.addToCart(product);
      // };
      //
      // $scope.deleteFromCart = function (idx) {
      //  localProductSvc.deleteFromCart (idx);
      // };
      //
      // $scope.addReview = function (review) {
      //   var index = $routeParams.idx;
      //   localProductSvc.addReview(index,review);
      //   $scope.newReview = {}
      // }

    //   $rootScope.$on("product:update", function (){
    //    $scope.products = localProductSvc.getProduct();
    //   });
    //
    //   $rootScope.$on("product:deleted", function (){
    //      $scope.products = localProductSvc.getProduct();
    //   });
    //   $rootScope.$on("product:added", function (){
    //      $scope.products = localProductSvc.getProduct();
    //   });
    //
    //   $rootScope.$on("cartItem:deleted", function (){
    //     $scope.cartProducts = localProductSvc.getCartProducts();
    //   });
     });
