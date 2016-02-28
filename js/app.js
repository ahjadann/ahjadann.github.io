"use strict";
var ahjadannApp = angular.module("ahjadannApp", [
    "ngRoute",
    "ngTouch",
    "ahjadannControllers",
    "ahjadannServices",
    // "ui.bootstrap"
]);

ahjadannApp.config(["$routeProvider",
    function($routeProvider) {
        $routeProvider.
        when("/home", {
            templateUrl: "partials/main.html",
            controller: "MainCtrl"
        }).
        when("/books/:bookYear", {
            templateUrl: "partials/books.html",
            controller: "BookCtrl"
        }).
        when("/journeys/:journeyYear", {
            templateUrl: "partials/journeys.html",
            controller: "JourneyCtrl"
        }).
        when("/albums/:albumYear", {
            templateUrl: "partials/albums.html",
            controller: "AlbumCtrl"
        }).
        otherwise({
            redirectTo: "/home"
        });
    }
]);
