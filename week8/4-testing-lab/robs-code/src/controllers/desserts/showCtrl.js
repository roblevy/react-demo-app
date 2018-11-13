function dessertsShowCtrl ($state, $scope, $http) {
  $scope.handleDelete = function() {
    $http({
      method: 'DELETE',
      url: `/api/desserts/${$state.params.id}`
    }).then(() => $state.go('dessertsIndex'));
  };
  $http({
    method: 'GET',
    url: `/api/desserts/${$state.params.id}`
  }).then(result => {
    $scope.dessert = result.data;
  });
}

export default dessertsShowCtrl;
