var app = angular.module('studio5App', ['ngRoute']);

studio5App.controller('studio5AppController', function($scope) {
    $scope.message = "hello";
    $scope.talk = "eat";
});


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'appController'
        })
        .otherwise({
            redirectTo: '/home'
        });

}]);
// studio5App.config(['$routeProvider', ])
// '$locationProvider',
// function($routeProvider, $locationProvider) {
//
//     // $locationProvider.html5Mode(true);
//
//     $routeProvider
//         // .when('/index', {
//         //     templateUrl: 'views/index.html',
//         //     controller: 'NinjaController'
//         // }) //giving home view a NinjaController grants it access to all data in controller that the scope object is utilizing
//         // .when('/contact', {
//         //     templateUrl: 'views/contact.html',
//         //     controller: 'ContactController'
//         // })
//         .when('/studio5/index.html', {
//             templateUrl: 'views/header.html',
//             controller: 'studio5AppController'
//         })
//     // .when('/directory', {
//     //     templateUrl: 'views/directory.html',
//     //     controller: 'NinjaController'
//     // }).otherwise({
//     //     redirectTo: '/studio4'
//     // });
// }]);
// studio5App.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//
//     $locationProvider.html5Mode(true);
//
//     $routeProvider
//         // .when('/index', {
//         //     templateUrl: 'views/index.html',
//         //     controller: 'NinjaController'
//         // }) //giving home view a NinjaController grants it access to all data in controller that the scope object is utilizing
//         // .when('/contact', {
//         //     templateUrl: 'views/contact.html',
//         //     controller: 'ContactController'
//         // })
//         .when('/studio5/', {
//             templateUrl: 'views/header.html',
//             controller: 'studio5AppController'
//         })
//         .when('/directory', {
//             templateUrl: 'views/directory.html',
//             controller: 'NinjaController'
//         }).otherwise({
//             redirectTo: '/studio4'
//         });
//     // .when('/directory', {
//     //     templateUrl: 'views/directory.html',
//     //     controller: 'NinjaController'
//     // }).otherwise({
//     //     redirectTo: '/home'
//     // });
// }]);
//
//
//
// studio5App.controller('ContactController', ['$scope', '$location', function($scope, $location) {
//     $scope.sendMessage = function() {
//         $location.path('contact-success'); //sends us to contact-success page
//
//     };
// }]);
