import angular from 'angular';
import '@uirouter/angularjs';

import 'bulma';

function Router($stateProvider) {
  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      url: '/'
    })
    .state('fishesIndex', {
      templateUrl: './views/fishes/index.html',
      url: '/fishes',
      controller: function($scope, $http) {
        $http({
          method: 'GET',
          url: '/api/fishes'
        }).then(result => {
          $scope.fishes = result.data;
        });
      }
    })
    .state('fishesShow', {
      templateUrl: './views/fishes/show.html',
      url: '/fishes/:id',
      controller: function($state, $scope, $http) {
        $http({
          method: 'GET',
          url: `/api/fishes/${$state.params.id}`
        }).then(result => {
          $scope.fish = result.data;
        });
      }
    });
}

// change the app name here and don't forget to change it in index.html as well!
angular.module('yourAppName', ['ui.router'])
  .config(Router);
