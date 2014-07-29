function PhoneListCtrl($scope, $http) {
    $http.get('json/phones.json').success(function(data) {
        //$scope.phones = data;

        $scope.phones = data.splice(0, 5);
    });

    $scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', '$http'];