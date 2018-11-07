function indexCtrl($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/fishes'
  }).then(result => {
    $scope.fishes = result.data;
  });
}

export default indexCtrl;
