function editCtrl ($http, $scope, $state) {
  $http({
    method: 'GET',
    url: `/api/desserts/${$state.params.id}`
  }).then(result => $scope.dessert = result.data);
  $scope.handleSubmit = function() {
    $http({
      method: 'PUT',
      url: `/api/desserts/${$state.params.id}`,
      data: $scope.dessert
    }).then(() => $state.go('dessertsShow', { id: $state.params.id }));
  };
}

export default editCtrl;
