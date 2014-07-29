

angular.module('c7-phonecat', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/phones', {templateUrl: 'partials/c7-phone-list.html', controller: 'PhoneListCtrl'}).
        when('/phones/:phoneId', {templateUrl: 'partials/c8-phone-detail.html', controller: 'PhoneDetailCtrl'}).
        otherwise({redirectTo: '/phones'});
}]);