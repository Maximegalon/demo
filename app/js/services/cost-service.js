'use strict';

// TODO: Simple, common services would be here.  However, more likley than not we create subfolders reflecting modules for functionality split across the app(s) needs

// NOTE: In the real world we would probably use promises and AJAX calls here to get the real value
angular.module('myApp.services').factory('costService', function () {
    // NOTE: This would be very differnet in real life, using promises and ajax calls. Sensitive info like salaray probably wouldn't be set or even sent down to the client. Probably only if there was a requirement to see full pay details.
    // NOTE: EMPLOYEESALARYBEFOREDUCTIONSYPERPAYPERIOD is not used, but we would check they could afford their beneifts
    var costService = {};

    var NUMBEROFPAYPERIODS = 26;
    var EMPLOYEESALARYBEFOREDUCTIONSYPERPAYPERIOD = 2000;
    var BENEIFTCOSTEMPLOYEEPERPAYPERIOD = 1000 / NUMBEROFPAYPERIODS;
    var BENEIFTCOSTOTHERMEMBERPERPAYPERIOD = 500 / NUMBEROFPAYPERIODS;
    var SPECIALDISCOUNT = .10;

    var calculateEmployeePortionOfCost = function (employee) {
        // NOTE: Name is a required field, so no need to check for null on employees names
        // NOTE: I'm assume an upper case, and that case sensitivty applies in the requirements.  So no .toUpperCase() usage.
        if (employee.name.substr(0, 1) == "A")
            return BENEIFTCOSTEMPLOYEEPERPAYPERIOD * (1 - SPECIALDISCOUNT)
        else
            return BENEIFTCOSTEMPLOYEEPERPAYPERIOD;
    }
    var calculateDependantPortionOfCost = function (employee) {
        // NOTE: Name is a required field, so no need to check for null on dependants names
        var totalDependantCost = 0;

        // NOTE: A simple for loop would suffice, but it helps to show knowledge of angular
        // NOTE: I'm assume an upper case, and that case sensitivty applies in the requirements.  So no .toUpperCase() usage.
        angular.forEach(employee.dependants, function (dependant, index) {
            if (dependant.name.substr(0, 1) == "A")
                totalDependantCost += (BENEIFTCOSTOTHERMEMBERPERPAYPERIOD * (1 - SPECIALDISCOUNT));
            else
                totalDependantCost += BENEIFTCOSTOTHERMEMBERPERPAYPERIOD;
        });

        return totalDependantCost;
    }

    costService.calculateCost = function (employee) {
        return calculateEmployeePortionOfCost(employee) + calculateDependantPortionOfCost(employee);
    }

    return costService;
});