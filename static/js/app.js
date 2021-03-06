(function(){
  var app = angular.module('myApp', [
    'ngResource', 
    'ngRoute', 
    'lstc.items', 
    'lstc.users',
    'lstc.header'
  ]);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/static/partials/home.html'
      }).
      when('/listedstuff', {
        templateUrl: '/static/partials/item-list.html',
        controller: 'AllItemsController',
        controllerAs: 'allItemsCtrl'
      }).
      when('/listedstuff/:itemId', {
        templateUrl: '/static/partials/item-detail.html',
        controller: 'SingleItemController',
        controllerAs: 'itemCtrl'
      }).
      when('/sell', {
        templateUrl: '/static/partials/sell.html',
        controller: 'SellFormController',
        controllerAs: 'sellCtrl'
      }).
      when('/appusers/:user_id', {
        templateUrl: '/static/partials/user-detail.html',
        controller: 'SinglePersonController',
        controllerAs: 'personCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

 })();



