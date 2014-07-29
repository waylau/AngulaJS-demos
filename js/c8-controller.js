function PhoneListCtrl($scope, $http) {
    $http.get('json/phones.json').success(function(data) {
        $scope.phones = data;
    });

    $scope.orderProp = 'age';
}



function PhoneDetailCtrl($scope, $routeParams, $http) {
    $http.get('json/' + $routeParams.phoneId + '.json').success(function(data) {
        $scope.phone = data;
    });
}

//PhoneListCtrl.$inject = ['$scope', '$http'];