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
      controller: function($scope) {
        $scope.countries = [
          { name: 'Afghanistan' },
          { name: 'Åland Islands'}
        ];
      }
    });
}

angular.module('IntroToAngular', ['ui.router'])
  .config(Router);
