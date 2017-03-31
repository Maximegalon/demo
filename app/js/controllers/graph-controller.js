// NOTE: Use this to enforce JavaScript standards by throwing errors
'use strict';

angular.module('myApp.controllers')
    .controller('graphController', function graphController($scope, $http, numberService) {
        $scope.vm = {};
        $scope.vm.numberOfRandomNumbers = "";
        $scope.vm.randonNumbers = [];
        $scope.vm.graphData = [];
        $scope.vm.labels = [];
        $scope.vm.series = [''];
        $scope.vm.minimumValueToDisplay = "";

        var last = null;

        $scope.generateNumbers = function () {
            numberService.getRandomNumbers($scope.vm.numberOfRandomNumbers).then(
                function (data) {
                    $scope.vm.labels = [];

                    // NOTE: This is an informative note describing the how the purpose of this loop is to put fresh labels for the exact number of numbers just generated
                    for (var i = 0; i < $scope.vm.numberOfRandomNumbers; i++) {
                        $scope.vm.labels.push ("#" + (i+1).toString())
                    }                   

                    $scope.vm.randonNumbers = data;

                    $scope.vm.graphData.pop();
                    $scope.vm.graphData.push(data);
                },
                function (err) {
                    // TODO: Inform the user of a problem
                }
            );            
        }
     
        // NOTE: Put the logic in the function here, as opposed to an expression in a template.  Which can become spaghetti logic over time and is harder to test.
        $scope.showResults = function () {
            return ($scope.vm.randonNumbers.length > 0);
        }

        $scope.filterNumbers = function () {
            $scope.vm.graphData.pop();
            $scope.vm.labels = [];

            var filteredRandomNumbers = [];

            for (var i = 0; i < $scope.vm.randonNumbers.length; i++) {
                if ($scope.vm.randonNumbers[i] >= $scope.vm.minimumValueToDisplay) {                    
                    filteredRandomNumbers.push($scope.vm.randonNumbers[i]);

                    // NOTE: Here and above it would make more sense to define an array to temporarily store these values, as done with filteredRandomNumbers
                    $scope.vm.labels.push("#" + (filteredRandomNumbers.length).toString())
                }                    
            }

            $scope.vm.graphData.push (filteredRandomNumbers);
        }
    }
)