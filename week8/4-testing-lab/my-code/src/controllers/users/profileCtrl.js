function profileCtrl($auth, $http, $scope) {
  console.log('The current user is', $auth.getPayload().sub);
  $http({
    method: 'GET',
    url: `/api/users/${$auth.getPayload().sub}`
  }).then(result => $scope.user = result.data);
}

export default profileCtrl;
