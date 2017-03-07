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

app.controller('appController', ['$scope', function($scope) {
    $scope.continents = [{
            name: "Europe",
            country1: "Sweden",
            lang1: "Swedish",
            country2: "Portugal",
            lang2: "Portuguese"
        },
        {
            name: "Asia",
            country1: "Nepal",
            lang1: "Nepali",
            country2: "Thailand",
            lang2: "Thai"
        },
        {
            name: "Africa",
            country1: "Uganda",
            lang1: "English",
            lang1_2: "Swahili",
            lang1_3: "Luganda",
            country2: "Sierra Leone",
            lang2: "English",
            lang2_1: "Bengali"
        },
        {
            name: "South America",
            country1: "Argentina",
            lang1: "Spanish",
            country2: "Peru",
            lang2: "Spanish",
            lang2_1: "Aymara",
            lang2_2: "Quechua"
        },
        {
            name: "Australia",
            country1: "Sweden",
            lang1: "English",
            lang1_2: "Australian English"
        },
        {
            name: "North America",
            country1: "California",
            country2: "New York",
            nativeLanguage: "English"

        },
    ]
}]);
