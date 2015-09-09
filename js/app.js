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
        when("/books/2015", {
            templateUrl: "partials/books_15.html",
            controller: "BookCtrl"
        }).
        when("/travels/2015", {
            templateUrl: "partials/travels_15.html",
            controller: "JourneyCtrl"
        }).
        when("/albums/2015", {
            templateUrl: "partials/albums_15.html",
            controller: "AlbumCtrl"
        }).
        otherwise({
            redirectTo: "/home"
        });
    }
]);