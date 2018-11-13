// This controller is global.
// Things put on $scope here are available everywhere!
function mainCtrl($scope, $auth, $state) {
  $scope.isAuthenticated = function() {
    if ($auth.isAuthenticated()) {
      $scope.username = $auth.getPayload().username;
      $scope.userId = $auth.getPayload().sub;
    }
    return $auth.isAuthenticated();
  };

  $scope.handleLogout = function() {
    // Delete the satellizer token and redirect:
    $auth.logout()
      .then(() => $state.go('home'));
  };
}

export default mainCtrl;
