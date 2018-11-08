import angular from 'angular';
import '@uirouter/angularjs';
import Router from './config/router'; // NOTE: Don't need the .js
import 'satellizer';
import 'bulma';

// change the app name here and don't forget to change it in index.html as well!
// Add a new module (plugin) to angular. This makes $auth available
angular.module('yourAppName', ['ui.router', 'satellizer'])
  .config(Router)
  // Weird syntax to configure satellizer.
  // The defaults are: /auth/signup etc...
  .config(function($authProvider) {
    $authProvider.signupUrl = '/api/register';
    $authProvider.loginUrl = '/api/login';
  });
