var studio5App = angular.module('studio5App', ['ngRoute', 'ngAnimate']);

studio5App.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        // .when('/index', {
        //     templateUrl: 'views/index.html',
        //     controller: 'NinjaController'
        // }) //giving home view a NinjaController grants it access to all data in controller that the scope object is utilizing
        // .when('/contact', {
        //     templateUrl: 'views/contact.html',
        //     controller: 'ContactController'
        // })
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'studio5AppController'
        })
    // .when('/directory', {
    //     templateUrl: 'views/directory.html',
    //     controller: 'NinjaController'
    // }).otherwise({
    //     redirectTo: '/home'
    // });
}]);



studio5App.controller('ContactController', ['$scope', '$location', function($scope, $location) {
    $scope.sendMessage = function() {
        $location.path('contact-success'); //sends us to contact-success page

    };
}]);
