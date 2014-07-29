function PhoneListCtrl($scope, $http) {
    $http.get('json/phones.json').success(function(data) {
        $scope.phones = data;
    });

    $scope.orderProp = 'age';
}



function PhoneDetailCtrl($scope, $routeParams, $http) {
    $http.get('json/' + $routeParams.phoneId + '.json').success(function(data) {
        $scope.phone = data;
        $scope.mainImageUrl = data.images[0];
    });

    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
    ;

    $scope.hello = function(name) {
        alert('Hello ' + (name || 'world') + '!');
    }


}

//PhoneListCtrl.$inject = ['$scope', '$http'];