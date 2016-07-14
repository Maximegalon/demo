'use strict';

angular.module('jm.i18next')
    .config(function ($i18nextProvider) {
        $i18nextProvider.options = {
            lng: 'en-US',
            useCookie: true,
            useLocalStorage: false,
            resGetPath: "i18n/__ns__-__lng__.js",
            ns: {
                namespaces: ['myapp'],
                defaultNs: 'myapp'
            }
        };
    }
);

angular.module('myApp', ['jm.i18next', 'ui.router', 'ngSanitize', 'ngResource', 'ngRoute', 'myApp.controllers', 'myApp.services'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("estimate", {
                url: "/estimate",
                templateUrl: "templates/estimate.html",
                controller: "estimateController"
            })
            .state("read", {
                url: "/read",
                templateUrl: "templates/read.html",
                controller: "readController"
            })
            .state("expand", {
                url: "/expand",
                templateUrl: "templates/expand.html",
                controller: "expandController"
            })
            .state("graph", {
                url: "/graph",
                templateUrl: "templates/graph.html",
                controller: "graphController"
            })
        $urlRouterProvider.otherwise("/graph");
    }]);