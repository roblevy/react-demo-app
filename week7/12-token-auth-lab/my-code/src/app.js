import angular from 'angular';
import '@uirouter/angularjs';

import Router from './config/router';
import './scss/main.scss';
import 'bulma';

angular.module('AngularDesserts', ['ui.router'])
  .config(Router);
