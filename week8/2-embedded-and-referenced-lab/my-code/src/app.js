import angular from 'angular';
import '@uirouter/angularjs';
import 'satellizer';

import Router from './config/router';
import mainCtrl from './controllers/mainCtrl';

import './scss/main.scss';
import 'bulma';

angular.module('AngularDesserts', ['ui.router', 'satellizer'])
  .controller('mainCtrl', mainCtrl)
  .config(Router)
  .config(function($authProvider) {
    $authProvider.signupUrl = '/api/register';
    $authProvider.loginUrl = '/api/login';
  });
