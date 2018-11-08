// This controller is global.
// Things put on $scope here are available everywhere!
function mainCtrl($scope, $auth) {
  $scope.isAuthenticated = function() {
    if ($auth.isAuthenticated()) {
      $scope.username = $auth.getPayload().username;
      $scope.userId = $auth.getPayload().sub;
    }
    return $auth.isAuthenticated();
  };
}

export default mainCtrl;
