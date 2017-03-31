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

angular.module('myApp', ['jm.i18next', 'ui.router', 'myApp.controllers', 'myApp.services', 'templates'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("estimate", {
                url: "/estimate",
                // TODO: Prefix templates with a module like seperation between site and common templates
                templateUrl: 'estimate.html',
                controller: "estimateController"
            })
            .state("read", {
                url: "/read",
                templateUrl: 'read.html',
                controller: "readController"
            })
            .state("expand", {
                url: "/expand",
                templateUrl: 'expand.html',
                controller: "expandController"
            })
            .state("graph", {
                url: "/graph",
                templateUrl: 'graph.html',
                controller: "graphController"
            })
        $urlRouterProvider.otherwise("/graph");
    }]);