import fishesIndexCtrl from '../controllers/fishes/indexCtrl';

function Router($stateProvider) {
  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      url: '/'
    })
    .state('fishesIndex', {
      templateUrl: './views/fishes/index.html',
      url: '/fishes',
      controller: fishesIndexCtrl
    })
    .state('fishesShow', {
      templateUrl: './views/fishes/show.html',
      url: '/fishes/:id',
      controller: function($state, $scope, $http) {
        $http({
          method: 'GET',
          url: `/api/fishes/${$state.params.id}`
        }).then(result => {
          $scope.fish = result.data;
        });
        $scope.handleDelete = function() {
          $http({
            method: 'DELETE',
            url: `/api/fishes/${$scope.fish._id}`
          }).then(() => $state.go('fishesIndex'));
        };
      }
    })
    .state('fishesNew', {
      url: '/fishes/new',
      templateUrl: './views/fishes/new.html',
      controller: function($scope, $http, $state) {
        $scope.handleSubmit = function() {
          console.log('Form was submitted!', $scope.testing);
          $http({
            method: 'POST',
            url: '/api/fishes',
            data: $scope.fish
          }).then(result => $state.go('fishesIndex'));
        };
      }
    })
    .state('fishesEdit', {
      templateUrl: './views/fishes/edit.html',
      url: '/fishes/:id/edit',
      controller: function($scope, $state, $http) {
        // Fetch the fish to populate the form
        $http({
          method: 'GET',
          url: `/api/fishes/${$state.params.id}`
        }).then(result => $scope.fish = result.data);
        $scope.handleSubmit = function() {
          // Here we request the UPDATE route:
          $http({
            method: 'PUT',
            url: `/api/fishes/${$state.params.id}`,
            data: $scope.fish
          }).then(result => $state.go('fishesIndex'));
        };
      }
    });
}
// Back-end vs. front-end
// require => import from
// module.exports => export default
export default Router;
