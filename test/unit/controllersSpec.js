'use strict';

describe('estimateController', function () {
    beforeEach(module('myApp.controllers'));
    beforeEach(module('myApp.services'));

    var $scope, $rootScope, $q, $controller, $service, getController;

    beforeEach(function () {
        inject(function ($injector) {
            $controller = $injector.get('$controller');
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $service = $injector.get('costService');

            getController = function (params) {
                return $controller('estimateController', params);
            };

            $q = $injector.get('$q');
        });
    });

    it('should initialize scope and values', inject(function () {
        var ctr = getController({ '$scope': $scope, 'costService': $service });

        // NOTE: We should enter the page with no dependants as we estimate the cost, and don't do CRUD operations
        expect($scope).toBeDefined();
        expect($scope.dependants).toBeDefined();
        expect($scope.dependants.length == 0).toBe(true);
    }));
});