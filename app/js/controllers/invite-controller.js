'use strict';

angular.module('myApp.controllers')
    .controller('inviteController', function inviateController($scope, $http, inviteService) {
        // TODO: Use logger or something other than console.logger to mention the controler is initialized for debugging
        // console.log ("myApp.controllers inviteController - initalized")

        // NOTE: Rename all the "person" variables so they are a bit more clear, but all the variable declaration are basically up here
        $scope.vm = {};

        // NOTE: Which of the two peopl are we targeting and what is the value currently selected
        $scope.vm.activePerson = 0;
        $scope.vm.selectedPerson = "";
        $scope.vm.selectedPerson1Image = "http://www.clipartkid.com/images/25/head-outline-clip-art-at-clker-com-vector-clip-art-online-royalty-wCNByg-clipart.png";
        $scope.vm.selectedPerson2Image = "http://www.clipartkid.com/images/25/head-outline-clip-art-at-clker-com-vector-clip-art-online-royalty-wCNByg-clipart.png";
        $scope.vm.pageIsLoading = true;

        // NOTE: All the data we would submit for a save
        $scope.vm.data = {};
        $scope.vm.data.person1 = "";
        $scope.vm.data.person2 = "";
        $scope.vm.data.subject = "";
        $scope.vm.data.message = "";
        
        // NOTE: The current array of people
        $scope.vm.peopleForConnecting = [];






        $scope.selectPerson = function (personId) {
            $scope.vm.activePerson = personId;
        }

        $scope.onPersonSelect = function (item, model, label) {
            // NOTE: It may/may not make sense to make this dynamic, may want to think about the case in the future with "n" invites going out at once.  Hard coding "person1", "person2" in our variable defintions above makes it cleaner but less flexible
            $scope.vm.data["person" + $scope.vm.activePerson] = item.uuid;
            $scope.vm["selectedPerson" + $scope.vm.activePerson+"Image"] = item.image_url;
            $scope.vm.selectedPerson = "";
        }

        // TODO: Put some kind of comment for each function. For example, this function determines if the user can click the save button
        $scope.isSaveDisabled = function () {
            if ($scope.vm.pageIsLoading || !$scope.vm.data.subject || !$scope.vm.data.message || !$scope.vm.data.person1 || !$scope.vm.data.person2)
                return true;

            return false;
        };

        
        $scope.save = function () {
            // TODO: Change the cursor and other UI indicatores so the user knows something is happening
            $scope.vm.pageIsLoading = true;

            // TODO: Call a method on our inviteService to save the user, mock data, unit tests etc etc.  Gracefully handle a server failure or well as tell the person it succeeded.  None of that is really done here
            inviteService.savePeople().then(function (results) {
                if (results === "success") {
                    // TODO: Use a toast, never an alert
                    alert("This Fralix has been created");

                    // NOTE: Reset the page to repeat the process
                    $scope.vm.activePerson = 0;
                    $scope.vm.selectedPerson = "";
                    $scope.vm.selectedPerson1Image = $scope.vm.selectedPerson2Image = "http://www.clipartkid.com/images/25/head-outline-clip-art-at-clker-com-vector-clip-art-online-royalty-wCNByg-clipart.png";
                    $scope.vm.data = {};
                }

                $scope.vm.pageIsLoading = false;
            });
        }

        function init() {
            // NOTE: We fetch all the data here, but in reality it would probably be an ajax call that passes in the key to getPeople and we filter on the server.
            // NOTE: Also the user typeahead is hitting on fields we don't want
            inviteService.getPeople().then(function (results) {
                $scope.vm.peopleForConnecting = results;

                $scope.vm.pageIsLoading = false;

                // console.log ("myApp.controllers inviteController - completed")
            });
        }

        init();
    }
)