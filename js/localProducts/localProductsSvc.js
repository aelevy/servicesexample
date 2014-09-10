angular.module("localService")
   .factory("localProductSvc", function($rootScope){
     var _products = [
       {
       title:"Blue Lightsaber",
       content:"The force is with you",
       image:"http://images2.fanpop.com/images/polls/126187_1223506335116_full.jpg",
       price:25,
       reviews:[
       {
        stars:2,
        body:"Perfect for fighting the dark side!!",
        author:"andrew@levy.com"

       }
       ]
     },
     {
      title:"Red Lightsaber",
      content:"Calvin's evil Sith Lord saber",
      image:"http://fc05.deviantart.net/fs20/f/2007/230/9/8/Palpatine__s_Lightsaber_by_mincus38.jpg",
      price:500,
      reviews:[
      {
       stars:4,
       body:"LUCA I AM YOUR FAAAATHER",
       author:"andrew@levy.com"

      }
      ]
     },
     {
      title:"Purple Lightsaber",
      content:"Sally's Perfect Purple Lightsaber",
      image:"http://images.sodahead.com/polls/000446873/polls_2252038057_0c56b3ef9d_o_1454_303796_answer_4_xlarge.jpeg",
      price:9000000,
      reviews:[
      {
       stars:5,
       body:"Amazing for fending off devs during SCRUMtime",
       author:"andrew@levy.com"

      }
      ]
     }

     ];

    var _cartProducts = []

     var getCartProducts = function (){
      return _cartProducts;
     }

     var getProduct = function (){
       return _products;
     };

     var addProduct = function (newProduct) {
      _products.push(newProduct);
      $rootScope.$broadcast("product:added");
     };

     var updateProduct = function (idx,product){
      _products[idx]= product;
      $rootScope.$broadcast("product:updated");
     };

     var deleteProduct = function (idx){
      _products.splice(idx,1);
      $rootScope.$broadcast("product:deleted")
     };

     var findProductByIdx = function (idx) {
      return _products[idx]
     };

     var addToCart = function (product) {
      _cartProducts.push(product);
      console.log(_cartProducts)
     };

     var deleteFromCart = function (idx) {
      _cartProducts.splice(idx,1);
      $rootScope.$broadcast("cartItem:deleted")
     };

     var addReview = function (idx,review) {
      _products[idx].reviews.push(review);
     }



     return {
      getCartProducts: getCartProducts,
      getProduct: getProduct,
      findProductByIdx: findProductByIdx,
      addProduct: addProduct,
      updateProduct: updateProduct,
      deleteProduct: deleteProduct,
      addToCart: addToCart,
      deleteFromCart: deleteFromCart,
      addReview: addReview
     };
   });
