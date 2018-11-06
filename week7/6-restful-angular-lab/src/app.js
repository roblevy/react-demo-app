import angular from 'angular';
import '@uirouter/angularjs';

import 'bulma';

function Router($stateProvider) {
  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      url: '/'
    })
    .state('dessertsIndex', {
      templateUrl: './views/desserts/index.html',
      url: '/desserts',
      controller: function($scope, $http) {
        $http({
          method: 'GET',
          url: '/api/desserts'
        }).then(result => {
          $scope.desserts = result.data;
        });
      }
    })
    .state('dessertsShow', {
      templateUrl: './views/desserts/show.html',
      url: '/desserts/:id',
      controller: function($state, $scope, $http) {
        $http({
          method: 'GET',
          url: `/api/desserts/${$state.params.id}`
        }).then(result => {
          $scope.dessert = result.data;
        });
      }
    });
}

// change the app name here and don't forget to change it in index.html as well!
angular.module('AngularDesserts', ['ui.router'])
  .config(Router);
