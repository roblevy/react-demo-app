function newCtrl($scope, $http, $state, $auth) {
  $scope.handleSubmit = function() {
    console.log('$auth.getPayload is', $auth.getPayload());
    // Added a createdBy key to the data object
    // which we are going to send to the backend
    $scope.fish.createdBy = $auth.getPayload().sub;
    $http({
      method: 'POST',
      url: '/api/fishes',
      data: $scope.fish
    }).then(result => $state.go('fishesShow', {
      id: result.data._id
    }));
  };
}

export default newCtrl;
