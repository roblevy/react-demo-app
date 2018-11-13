import indexCtrl from '../controllers/desserts/indexCtrl';
import dessertsShowCtrl from '../controllers/desserts/showCtrl';
import newCtrl from '../controllers/desserts/newCtrl';
import editCtrl from '../controllers/desserts/editCtrl';

import profileCtrl from '../controllers/users/profileCtrl';

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
      controller: dessertsShowCtrl
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
    .state('profile', {
      templateUrl: './views/users/profile.html',
      url: '/users/:id',
      controller: profileCtrl
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
