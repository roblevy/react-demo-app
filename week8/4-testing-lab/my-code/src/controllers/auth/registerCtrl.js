function registerCtrl($scope, $state, $auth) {
  $scope.handleRegister = function() {
    console.log('Hello new user');
    $auth.signup($scope.user)
      .then(() => $state.go('login'))
      .catch(err => console.log('There was an error', err));
  };
}

export default registerCtrl;
