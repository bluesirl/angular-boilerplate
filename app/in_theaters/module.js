(function(angular) {
  'use strict';

  // 定义一个模块
  angular.module('moviecat.in_theaters', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/in_theaters', {
      templateUrl: 'in_theaters/view.html',
      controller: 'in_theatersController'
    });
  }])

  .controller('in_theatersController', [
    '$scope',
    '$http',
    function($scope, $http) {
      $scope.title = '正在热映';
      $http
        .get('/moviecat/app/data.json')
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
      $scope.movies = [];
    }
  ]);

})(angular)
