'use strict';

describe('PhoneCat controllers', function(){
    describe('PhoneListCtrl', function(){
        beforeEach(module('PhonecatApp'));
        it('should create "phone" model with 3 phones',
            inject(function($controller){
                var scope = {},
                ctrl = $controller('PhoneListCtrl', {$scope:scope});
                except(scope.phones.length).toBe(3);
            }));
    });
});