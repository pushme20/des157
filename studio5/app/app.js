var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.controller('appController', function($scope) {
    $scope.message = "hello";
    $scope.talk = "eat";
});

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/explore', {
            templateUrl: 'views/explore.html',
            controller: 'appController'
        })
        .when('/discover', {
            templateUrl: 'views/discover.html',
            controller: 'appController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'appController'
        })
        .when('/help', {
            templateUrl: 'views/help.html',
            controller: 'appController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);
