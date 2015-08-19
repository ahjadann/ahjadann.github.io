"use strict";

var ahjadannControllers = angular.module("ahjadannControllers", []);

ahjadannControllers.controller("MainCtrl", ["$scope",
    function($scope) {

    }
]);

ahjadannControllers.controller("BookCtrl", ["$scope", "Books",
    function($scope, Books) {
        $scope.books = Books.query();
        $scope.isReadonly = true;

        $scope.hoveringOver = function(value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / $scope.max);
        };
    }
]);

ahjadannControllers.controller("JourneyCtrl", ["$scope", "Journeys",
    function($scope, Journeys) {
        $scope.journeys = Journeys.query();
        $scope.isReadonly = true;

        $scope.hoveringOver = function(value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / $scope.max);
        };
    }
]);