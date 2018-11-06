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
    })
    .state('fishesNew', {
      url: '/fishes/new',
      templateUrl: './views/fishes/new.html',
      controller: function($scope, $http, $state) {
        $scope.handleSubmit = function() {
          console.log('Form was submitted!', $scope.testing);
          $http({
            method: 'POST',
            url: '/api/fishes',
            data: $scope.fish
          }).then(result => $state.go('fishesIndex'));
        };
      }
    });
}

// change the app name here and don't forget to change it in index.html as well!
angular.module('yourAppName', ['ui.router'])
  .config(Router);
