function loginCtrl($scope, $state, $auth) {
  $scope.handleLogin = function() {
    console.log('Logging in!');
    $auth.login($scope.user)
      .then(() => $state.go('dessertsIndex'))
      .catch(err => console.log('There was an error', err));
  };
}

export default loginCtrl;
