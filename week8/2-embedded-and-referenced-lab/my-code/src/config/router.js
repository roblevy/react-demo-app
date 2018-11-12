import indexCtrl from '../controllers/desserts/indexCtrl';
import showCtrl from '../controllers/desserts/showCtrl';
import newCtrl from '../controllers/desserts/newCtrl';
import editCtrl from '../controllers/desserts/editCtrl';

import loginCtrl from '../controllers/auth/loginCtrl';
import registerCtrl from '../controllers/auth/registerCtrl';

function Router($stateProvider) {
  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      url: '/'
    })
    .state('dessertsIndex', {
      templateUrl: './views/desserts/index.html',
      url: '/desserts',
      controller: indexCtrl
    })
    .state('dessertsShow', {
      templateUrl: './views/desserts/show.html',
      url: '/desserts/:id',
      controller: showCtrl
    })
    .state('dessertsNew', {
      templateUrl: './views/desserts/new.html',
      url: '/desserts/new',
      controller: newCtrl
    })
    .state('dessertsEdit', {
      templateUrl: './views/desserts/edit.html',
      url: '/desserts/:id/edit',
      controller: editCtrl
    })
    .state('login', {
      templateUrl: './views/auth/login.html',
      url: '/login',
      controller: loginCtrl
    })
    .state('register', {
      templateUrl: './views/auth/register.html',
      url: '/register',
      controller: registerCtrl
    });
}

export default Router;
