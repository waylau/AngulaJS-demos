
angular.module('c9-phonecat', ['ngRoute','c9-phonecatFilters']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/phones', {templateUrl: 'partials/c7-phone-list.html', controller: 'PhoneListCtrl'}).
        when('/phones/:phoneId', {templateUrl: 'partials/c10-phone-detail.html', controller: 'PhoneDetailCtrl'}).
        otherwise({redirectTo: '/phones'});
}]);