'use strict';

// TODO: More likley than not we create subfolders reflecting modules for functionality split across the app(s) needs
angular.module('myApp.services').factory('numberService', function ($http, $q, $log) {
    var numberService = {};    

    numberService.getRandomNumbers = function (countOfRandomNumbers) {
        // TODO: Clean up below, this opens up injection security issues and has client-side validation issues
        var url = 'https://qrng.anu.edu.au/API/jsonI.php?length=' + countOfRandomNumbers + '&type=uint8';
        var deferred = $q.defer();
            
        $http({ method: 'GET', url: url }).success(function (response) {
            deferred.resolve(response.data);
        }).error(function(msg, code) {    
            deferred.reject(msg);    
            $log.error(msg, code);
        });

        return deferred.promise;       
    }

    return numberService;
});