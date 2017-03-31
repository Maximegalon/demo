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

angular.module('myApp', ['jm.i18next', 'ui.router', 'ngMockE2E', 'ui.bootstrap', 'myApp.controllers', 'myApp.services', 'templates'])  
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
            .state("invite", {
                url: "/invite",
                templateUrl: 'invite.html',
                controller: "inviteController"
            })
        $urlRouterProvider.otherwise("/invite");
    }]);

// NOTE: This would not be included when the project is built and as such probably not located here
angular.module('myApp')
    .run(function ($httpBackend, inviteService) {
        $httpBackend.whenGET('/people').respond(function (method, url, data) {                       
            return [200, globalPeopleDummyData, {}];
        });

        $httpBackend.whenGET(/^\w+.*/).passThrough();
    });