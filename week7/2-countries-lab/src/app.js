import angular from 'angular';
import '@uirouter/angularjs';

import 'bulma';

function Router($stateProvider) {
  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      url: '/'
    })
    .state('about', {
      templateUrl: './views/about.html',
      url: '/about'
    });
}

angular.module('IntroToAngular', ['ui.router'])
  .config(Router);
