"use strict";

var ahjadannControllers = angular.module("ahjadannControllers", []);

ahjadannControllers.controller("MainCtrl", ["$scope",
    function($scope) {

    }
]);

ahjadannControllers.controller("BookCtrl", ["$scope", "$routeParams", "Books",
    function($scope, $routeParams, Books) {
        $scope.books = Books.query();
        $scope.isReadonly = true;
        $scope.bookYear = $routeParams.bookYear;

        $scope.hoveringOver = function(value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / $scope.max);
        };
    }
]);

ahjadannControllers.controller("JourneyCtrl", ["$scope", "$routeParams", "Journeys",
    function($scope, $routeParams, Journeys) {
        $scope.journeys = Journeys.query();
        $scope.isReadonly = true;
        $scope.journeyYear = $routeParams.journeyYear;

        $scope.hoveringOver = function(value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / $scope.max);
        };
    }
]);

ahjadannControllers.controller("AlbumCtrl", ["$scope", "$routeParams", "Albums",
    function($scope, $routeParams, Albums) {
        $scope.albums = Albums.query();
        $scope.isReadonly = true;
        $scope.albumYear = $routeParams.albumYear;

        $scope.hoveringOver = function(value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / $scope.max);
        };
    }
]);
