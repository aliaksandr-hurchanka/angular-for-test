'use strict';

// describe("An AngularJS test suite", function () {
//     it('should have tests', function () {
//         expect(true).toBe(true);
//     });

//     it('should inject dependencies', inject(function ($resource) {
//         //expect($resource).toBeDefined();
//     }));
// });

describe('testAppCtrl function', function() {
    beforeEach(angular.module('testApp'));
    var scope, controller;

    beforeEach(inject(function($controller, $rootScope) {
         scope = $rootScope.$new();
         controller = $controller('testAppCtrl', {
              $scope: scope
         });
    }));
    
    it('has correct initial values', function() {
        expect(scope.value).toBe(0);
        expect(scope.maxValue).toBe(3);  
    });
});
