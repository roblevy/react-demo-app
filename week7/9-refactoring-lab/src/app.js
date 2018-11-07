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
        $scope.handleDelete = function() {
          $http({
            method: 'DELETE',
            url: `/api/desserts/${$state.params.id}`
          }).then(() => $state.go('dessertsIndex'));
        };
        $http({
          method: 'GET',
          url: `/api/desserts/${$state.params.id}`
        }).then(result => {
          $scope.dessert = result.data;
        });
      }
    })
    .state('dessertsNew', {
      templateUrl: './views/desserts/new.html',
      url: '/desserts/new',
      controller: function($http, $scope, $state) {
        $scope.handleSubmit = function() {
          console.log('Form submitted');
          $http({
            method: 'POST',
            url: '/api/desserts',
            data: $scope.dessert
          }).then(() => $state.go('dessertsIndex'));
        };
      }
    })
    .state('dessertsEdit', {
      templateUrl: './views/desserts/edit.html',
      url: '/desserts/:id/edit',
      controller: function($http, $scope, $state) {
        $http({
          method: 'GET',
          url: `/api/desserts/${$state.params.id}`
        }).then(result => $scope.dessert = result.data);
        $scope.handleSubmit = function() {
          $http({
            method: 'PUT',
            url: `/api/desserts/${$state.params.id}`,
            data: $scope.dessert
          }).then(() => $state.go('dessertsShow', { id: $state.params.id }));
        };
      }
    });
}


angular.module('AngularDesserts', ['ui.router'])
  .config(Router);
