(function(angular) {
  'use strict';

  // 主模块
  angular.module('moviecat', [
    'ngRoute',
    'moviecat.in_theaters',
    'moviecat.comming_soon',
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/in_theaters' });
  }]);

}(angular));
