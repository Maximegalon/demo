'use strict';

angular.module('myApp.controllers')
    .controller('estimateController', function createController($scope, costService) {
        // TODO: Much, much more client-side validation, some starting regexes there
        //$scope.state = /^\w\w$/;
        //$scope.zip = /^\d\d\d\d\d$/;
        //$scope.word = /^\w*$/;

        // NOTE: It is bad to tie the id/label together with the "partner" text, but I'm only doing this to quickly have an initial value for the drop down. Otherwise, it leaves a bad/invalid/blank entry upon start in the select drop down field.
        $scope.employees = [];
        $scope.dependants = [];
        $scope.totalCost = 0;
        $scope.form = { dependant: {type: "partner"}};

        $scope.save = function () {
            var newEmployee = { name: $scope.form.name, dependants: $scope.dependants };
             
            newEmployee.cost = costService.calculateCost(newEmployee);

            $scope.totalCost += newEmployee.cost;

            $scope.employees.push(newEmployee);
            
            $scope.dependants = [];
        };

        $scope.addDependant = function () {            
            $scope.dependants.push({ name: $scope.form.dependant.name, type: $scope.form.dependant.type });
            $scope.form.dependant.name = "";
        };

        $scope.isSaveDisabled = function () {
            return $scope.formNewEmployee.$invalid;
        };
    }
)