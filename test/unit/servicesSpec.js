'use strict';

describe('costService', function () {
  beforeEach(module('myApp.services'));

  var $service;

  beforeEach(function () {
      inject(function ($injector) {
          $service = $injector.get('costService');
      });
  });

  // NOTE: These combinations of tests gives 100% code coverage for the service
  describe('should apply the employee discount', function() {
    it('for a single employee', inject(function () {
        var employeeDummyDataNormallySavedElsewhere = { name: "A", dependants: [] };
        var cost = $service.calculateCost(employeeDummyDataNormallySavedElsewhere);

        // TODO: We wouldn't hard code these items normally
        // NOTE: The cost, per period after any discounts should match
        expect(cost).toEqual((1000/26)*.90);
    }));

    it('for a single employee with one extra member who DOES NOT have the discount', inject(function () {
        var employeeDummyDataNormallySavedElsewhere = { name: "A", dependants: [{ name: "a" }] };
        var cost = $service.calculateCost(employeeDummyDataNormallySavedElsewhere);

        // TODO: We wouldn't hard code these items normally
        // NOTE: The cost, per period after any discounts should match
        expect(cost).toEqual((1000 / 26) * .90 + (500/26)*1);
    }));

    it('for a single employee with one extra member who DOES have the discount', inject(function () {
        var employeeDummyDataNormallySavedElsewhere = { name: "A", dependants: [{ name: "A" }] };
        var cost = $service.calculateCost(employeeDummyDataNormallySavedElsewhere);

        // TODO: We wouldn't hard code these items normally
        // NOTE: The cost, per period after any discounts should match
        expect(cost).toEqual((1000 / 26) * .90 + (500 / 26) * .9);
    }));
  });

  describe('should NOT apply the employee discount', function () {
      it('for a single employee', inject(function () {
          var employeeDummyDataNormallySavedElsewhere = { name: "a", dependants: [] };
          var cost = $service.calculateCost(employeeDummyDataNormallySavedElsewhere);

          // TODO: We wouldn't hard code these items normally
          // NOTE: The cost, per period after any discounts should match
          expect(cost).toEqual((1000 / 26) * 1);
      }));

      it('for a single employee with one extra member who DOES NOT have the discount', inject(function () {
          var employeeDummyDataNormallySavedElsewhere = { name: "a", dependants: [{ name: "a" }] };
          var cost = $service.calculateCost(employeeDummyDataNormallySavedElsewhere);

          // TODO: We wouldn't hard code these items normally
          // NOTE: The cost, per period after any discounts should match
          expect(cost).toEqual((1000 / 26) * 1 + (500 / 26) * 1);
      }));

      it('for a single employee with one extra member who DOES have the discount', inject(function () {
          var employeeDummyDataNormallySavedElsewhere = { name: "a", dependants: [{ name: "A" }] };
          var cost = $service.calculateCost(employeeDummyDataNormallySavedElsewhere);

          // TODO: We wouldn't hard code these items normally
          // NOTE: The cost, per period after any discounts should match
          expect(cost).toEqual((1000 / 26) * 1 + (500 / 26) * .9);
      }));
  });
});
