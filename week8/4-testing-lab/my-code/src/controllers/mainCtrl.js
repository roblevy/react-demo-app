function mainCtrl($auth, $scope, $state) {
  $scope.isAuthenticated = function() {
    if ($auth.isAuthenticated()) {
      $scope.username = $auth.getPayload().username;
      $scope.userId = $auth.getPayload().sub;
    }
    return $auth.isAuthenticated();
  };

  $scope.handleLogout = function () {
    console.log('Bye!');
    $auth.logout();
    $state.go('home');
  };
}

export default mainCtrl;
