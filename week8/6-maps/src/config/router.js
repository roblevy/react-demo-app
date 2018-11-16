import mapController from '../controllers/mapController';

function Router($stateProvider) {
  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      url: '/'
    })
    .state('map', {
      templateUrl: './views/map.html',
      url: '/map',
      controller: mapController
    });
}

export default Router;
