function indexCtrl ($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/desserts'
  }).then(result => {
    $scope.allDesserts = result.data;
    $scope.filteredDesserts = $scope.allDesserts;
  });
  $scope.handleFilterSubmit = function() {
    console.log('Filtered form submitted', $scope.searchTerm);
    $scope.filteredDesserts = $scope.allDesserts.filter(dessert => dessert.name.toLowerCase().startsWith($scope.searchTerm.toLowerCase())
    );
  };
}

export default indexCtrl;
