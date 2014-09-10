angular.module("localService")
    .controller("localProdCtrl",function ($rootScope, $scope, $routeParams, $location, localProductSvc){

     $scope.products = localProductSvc.getProduct();

     $scope.cartProducts = localProductSvc.getCartProducts();

     $scope.singleProduct = localProductSvc.findProductByIdx($routeParams.idx);

      $scope.addProduct = function (product) {
       product.reviews=[];
       localProductSvc.addProduct (product);
       $location.path("/productLocal/admin");
      };

      $scope.updateProduct = function (idx,post) {
       localProductSvc.updateProduct(idx,post);
       $location.path("/productLocal/admin");
      }

      $scope.deleteProduct = function (idx)  {
       localProductSvc.deleteProduct (idx);
      };

      $scope.addToCart = function (product){
       localProductSvc.addToCart(product);
      };

      $scope.deleteFromCart = function (idx) {
       localProductSvc.deleteFromCart (idx);
      };

      $scope.addReview = function (review) {
        var index = $routeParams.idx;
        localProductSvc.addReview(index,review);
        $scope.newReview = {}
      }

      $rootScope.$on("product:update", function (){
       $scope.products = localProductSvc.getProduct();
      });

      $rootScope.$on("product:deleted", function (){
         $scope.products = localProductSvc.getProduct();
      });
      $rootScope.$on("product:added", function (){
         $scope.products = localProductSvc.getProduct();
      });

      $rootScope.$on("cartItem:deleted", function (){
        $scope.cartProducts = localProductSvc.getCartProducts();
      });
    });
