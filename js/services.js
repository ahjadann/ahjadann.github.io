"use strict";

var ahjadannServices = angular.module("ahjadannServices", ["ngResource"]);

ahjadannServices.factory("Books", ["$resource",
    function($resource) {
        return $resource("data/books.json", {}, {
            query: {
                method: "GET",
                isArray: true
            }
        });
    }
]);

ahjadannServices.factory("Journeys", ["$resource",
    function($resource) {
        return $resource("data/journeys.json", {}, {
            query: {
                method: "GET",
                isArray: true
            }
        });
    }
]);

ahjadannServices.factory("Albums", ["$resource",
    function($resource) {
        return $resource("data/albums.json", {}, {
            query: {
                method: "GET",
                isArray: true
            }
        });
    }
]);