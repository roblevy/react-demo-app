import angular from 'angular';
import '@uirouter/angularjs';
import Router from './config/router';
import 'bulma';
import './scss/main.scss';
import mainCtrl from './controllers/mainCtrl';

angular.module('mapMan', ['ui.router'])
  .config(Router)
  // The mainCtrl in quotes is the name of the controller.
  // It's used by ng-controller.
  .controller('mainCtrl', mainCtrl);
