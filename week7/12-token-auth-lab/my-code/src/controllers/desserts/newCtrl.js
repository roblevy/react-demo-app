function newCtrl ($http, $scope, $state) {
  $scope.handleSubmit = function() {
    console.log('Form submitted');
    $http({
      method: 'POST',
      url: '/api/desserts',
      data: $scope.dessert
    }).then(() => $state.go('dessertsIndex'));
  };
}

export default newCtrl;
