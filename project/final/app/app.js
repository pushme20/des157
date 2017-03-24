var app = angular.module('app', ['ngRoute', 'ngAnimate', 'angularCSS', 'ngMap']);

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
        .otherwise({
            redirectTo: '/home'
        });
}]);

app.run(function($rootScope, NgMap) {
    NgMap.getMap().then(function(map) {
        $rootScope.map = map;
    });
});

app.controller('appController', ['$scope', '$rootScope', function($rootScope, $scope) {
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
