import angular from 'angular';
import '@uirouter/angularjs';

import 'bulma';

function Router($stateProvider) {
  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      url: '/',
      controller: function($scope) {
        $scope.name = 'WDI 37!!';
        $scope.age = '3 weeks';
      }
    })
    .state('about', {
      templateUrl: './views/about.html',
      url: '/about'
    })
    .state('countriesIndex', {
      templateUrl: './views/countries/countryIndex.html',
      url: '/countries',
      controller: function($scope, $http) {
        $http({
          method: 'GET',
          url: 'https://restcountries.eu/rest/v2/all'
        }).then(result => {
          console.log('The result from the api is', result);
          $scope.countries = result.data;
        });
        // $scope.countries = [
        //   { name: 'Afghanistan' },
        //   { name: 'Åland Islands'}
        // ];
      }
    })
    .state('countriesShow', {
      templateUrl: './views/countries/show.html',
      url: '/countries/:id',
      controller: function($scope, $http, $state) {
        console.log('$state.params.id is', $state.params.id);
        $http({
          method: 'GET',
          url: `https://restcountries.eu/rest/v2/alpha/${$state.params.id}`
        }).then(result => {
          $scope.country = result.data;
        });
      }
    });
}

angular.module('IntroToAngular', ['ui.router'])
  .config(Router);
