(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function($http){
              this.products = gem;
          }
  );

  app.directive('productColor', function() {
      return {
          restrict: 'E', //Element Directive
          templateUrl: 'product-color.html'
      };
   }
  );

  var gem = [
              {
                  name: "Pajama",
                  price: 23.11,
                  color: "Blue"
              },
              {
                  name: "Kurta",
                  price: 5.09,
                  color: "Red"
              }
  ];

})();