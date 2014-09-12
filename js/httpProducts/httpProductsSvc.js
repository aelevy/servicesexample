angular.module("httpModule")
  .factory("httpService", function ($http, $rootScope, $log) {

     var urlBase = "http://tiy-fee-rest.herokuapp.com/collections/aelevy";

     // var getCartProducts = function (){
     //  return _cartProducts;
     // }

     var getProducts = function (){
       return $http.get(urlBase);
     };

     var findProductByIdx = function (idx) {
      return $http.get(urlBase + "/" + id);
     };

     var addProduct = function (newProduct) {
      return $http.post(urlBase, product).then(function(response){
       $rootScope.$broadcast("product:added");
       $log.info("product:added");
      })
     };

     var updateProduct = function (idx,product){
      return $http.delete(urlBase + "/" + id).then(function(response){
       $rootScope.$broadcast("product:deleted");
       $log.info("product:deleted");
      })
     };

     var deleteProduct = function (idx){
      return $http.delete(urlBase + "/" + id).then(function(response){
       $rootScope.$broadcast("product:deleted");
       $log.info("product:deleted");
      })
     };



     // var addToCart = function (product) {
     //  _cartProducts.push(product);
     //  console.log(_cartProducts)
     // };
     //
     // var deleteFromCart = function (idx) {
     //  _cartProducts.splice(idx,1);
     //  $rootScope.$broadcast("cartItem:deleted")
     // };
     //
     // var addReview = function (idx,review) {
     //  _products[idx].reviews.push(review);
     // }



     return {
      // getCartProducts: getCartProducts,
      getProduct: getProduct,
      findProductByIdx: findProductByIdx,
      addProduct: addProduct,
      updateProduct: updateProduct,
      deleteProduct: deleteProduct
      // addToCart: addToCart,
      // deleteFromCart: deleteFromCart,
      // addReview: addReview
     };
   });
