import angular from 'angular';
import '@uirouter/angularjs';
// NOTE: Flash messages!
import 'angular-flash-alert';
import 'angular-flash-alert/dist/angular-flash.min.css';
import Router from './config/router'; // NOTE: Don't need the .js
import 'satellizer';
import 'bulma';
import './scss/main.scss';
import mainCtrl from './controllers/mainCtrl';

// NOTE: ngFlash is the same thing as angular-flash-alert. It makes
//       Flash.create available in the controllers.
angular.module('fish', ['ui.router', 'satellizer', 'ngFlash'])
  .config(Router)
  // The mainCtrl in quotes is the name of the controller.
  // It's used by ng-controller.
  .controller('mainCtrl', mainCtrl)
  // Weird syntax to configure satellizer.
  // The defaults are: /auth/signup etc...
  .config(function($authProvider) {
    $authProvider.signupUrl = '/api/register';
    $authProvider.loginUrl = '/api/login';
  });
