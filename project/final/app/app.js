var app = angular.module('app', ['ngRoute', 'ngAnimate', 'angularCSS', 'ngMap']);

// app.controller('appController', function($scope) {
//     $scope.message = "hello";
//     $scope.talk = "eat";
// });

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/explore', {
            templateUrl: 'views/explore.html',
            controller: 'mapCtrl as vm',
            css: 'css/explore.css'
        })
        .when('/discover', {
            templateUrl: 'views/discover.html',
            controller: 'appController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'appController',
            css: 'css/about.css'
        })
        .when('/help', {
            templateUrl: 'views/help.html',
            controller: 'appController',
            css: 'css/help.css'

        })
        .when('/success-page', {
            templateUrl: 'views/success-page.html',
            controller: 'appController',

        })
        .otherwise({
            redirectTo: '/home'
        });
}]);

// app.controller('appController', ['$scope', '$http', '$location', function($scope, $http, $location, $NgMap) {
//
//     $http.get('data/continents.json').then(function(response) {
//         $scope.continents = response.data;
//     });
//
//     $scope.sendMessage = function() {
//         $location.path('success-page'); //sends us to contact-success page
//     };
//
//     // $NgMap.getMap().then(function(map) {
//     //     console.log(map.getCenter());
//     //     console.log('markers', map.markers);
//     //     console.log('shapes', map.shapes);
//     // });
//
// }]);
app.run(function($rootScope, NgMap) {
    NgMap.getMap().then(function(map) {
        $rootScope.map = map;
    });
});

app.controller('appController', ['$scope', '$rootScope', function($rootScope, $scope) {
    // $rootScope.$on('mapInitialized', function(evt, map) {
    //     $rootScope.mymap = map;
    //     $rootScope.$apply();
    // });

    $rootScope.$on('mapInitialized', function(evt, map) {
        $rootScope.mymap = map;
        $rootScope.$apply();
    });



}]);

app.controller('mapCtrl',
    function(NgMap) {
        var vm = this;
        vm.types = "['establishment']";
        vm.placeChanged = function() {
            vm.place = this.getPlace();
            console.log('location', vm.place.geometry.location);
            vm.map.setCenter(vm.place.geometry.location);
        }
        NgMap.getMap().then(function(map) {
            vm.map = map;
        });
    });
// $scope.continents = [{
//         name: "Europe",
//         country1: "Sweden",
//         lang1: "Swedish",
//         country2: "Portugal",
//         lang2: "Portuguese"
//     },
//     {
//         name: "Asia",
//         country1: "Nepal",
//         lang1: "Nepali",
//         country2: "Thailand",
//         lang2: "Thai"
//     },
//     {
//         name: "Africa",
//         country1: "Uganda",
//         lang1: "English",
//         lang1_2: "Swahili",
//         lang1_3: "Luganda",
//         country2: "Sierra Leone",
//         lang2: "English",
//         lang2_1: "Bengali"
//     },
//     {
//         name: "South America",
//         country1: "Argentina",
//         lang1: "Spanish",
//         country2: "Peru",
//         lang2: "Spanish",
//         lang2_1: "Aymara",
//         lang2_2: "Quechua"
//     },
//     {
//         name: "Australia",
//         country1: "Sweden",
//         lang1: "English",
//         lang1_2: "Australian English"
//     },
//     {
//         name: "North America",
//         country1: "California",
//         country2: "New York",
//         nativeLanguage: "English"
//
//     },
// ]






// app.controller('successController', ['$scope', '$location',
//     function($scope, $location) {
//         $scope.sendMessage = function() {
//             $location.path('success-page'); //sends us to contact-success page
//         };
//     }
// ]);

//   '$location', function($scope, $location) {
//     $scope.sendMessage = function() {
//         $location.path('contact-success'); //sends us to contact-success page
//
//     };
// tact-success page
//
//     };
//     tact - success page
//
// };
