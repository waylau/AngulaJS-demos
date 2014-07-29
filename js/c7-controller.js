function PhoneListCtrl($scope, $http) {
    $http.get('json/phones.json').success(function(data) {
        $scope.phones = data;
    });

    $scope.orderProp = 'age';
}



function PhoneDetailCtrl($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
}


//PhoneListCtrl.$inject = ['$scope', '$http'];