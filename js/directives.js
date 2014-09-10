angular.module("app.directives", [])
  // .directive("myDirective", function() {
  //   return {
  //     restrict: "EA", //E = Element C = Class A = Attribute
  //     templateUrl: "views/myDirective.html"
  //   };
  // })
     .directive("productList",function (){
      return{
       restrict:"E",
       scope: {
        title:"@",
        content:"@",
        image:"@"
       },
       templateUrl: "views/directives.html",
      }
     })
  // .directive("profileCard", function() {
  //   return {
  //     restrict: "E",
  //     scope: {
  //       name: "@",
  //       photo: "@",
  //       bio: "@",
  //       background: "@"
  //     }
  //     templateUrl: "views/profileCard.html",
  //     link: function(scope, element, attrs) {
  //       var background = attrs.background
  //       element.on("click", function(e) {
  //         $(this).find("p").css("background", background)
  //       })
  //
  //     }
  //   }
  // })

  // MUST BE IN THIS ORDER: scope, element, attrs











  // restrict: E = Element C = Class A = Attribute, must be capitalized
