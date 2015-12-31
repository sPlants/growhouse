var app = angular.module('growhouseApp', ['ui.router'])

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/views/home.ejs',
      controller: 'MainCtrl',
    })
  $urlRouterProvider.otherwise('home');
}]);

app.controller('MainCtrl', [
'$scope',
function($scope){

  $scope.test = 'Hello grow world!';

//End MainCtrl
  }
]);

