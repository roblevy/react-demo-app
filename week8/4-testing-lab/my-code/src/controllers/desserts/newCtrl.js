function newCtrl ($auth, $http, $scope, $state) {
  $scope.handleSubmit = function() {
    console.log('Form submitted');
    $scope.dessert.createdBy = $auth.getPayload().sub;
    $http({
      method: 'POST',
      url: '/api/desserts',
      data: $scope.dessert
    }).then(result => $state.go('dessertsShow', { id: result.data._id }));
  };
}

export default newCtrl;
