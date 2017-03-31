'use strict';

angular.module('myApp.services').factory('inviteService', function ($http, $q, $log, $timeout) {
    var inviteService = {};    

    inviteService.getPeople = function () {
        var url = '/people';
        var deferred = $q.defer();
            
        $http({ method: 'GET', url: url }).success(function (response) {
            deferred.resolve(response);
        }).error(function(msg, code) {    
            deferred.reject(msg);    
            $log.error(msg, code);
        });

        return deferred.promise;       
    }


    inviteService.savePeople = function (data) {
        var deferred = $q.defer();

        // NOTE: Put in a artificial delay to make it seem like a server call is happening
        $timeout(function () {
            deferred.resolve("success");
        }, 3000)
        
        return deferred.promise;
    }

    return inviteService;
});