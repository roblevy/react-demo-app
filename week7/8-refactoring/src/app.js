import angular from 'angular';
import '@uirouter/angularjs';
import Router from './config/router'; // NOTE: Don't need the .js
import 'bulma';

// change the app name here and don't forget to change it in index.html as well!
angular.module('yourAppName', ['ui.router'])
  .config(Router);
