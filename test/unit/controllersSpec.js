'use strict';

describe('PhoneCat controllers', function(){
    describe('PhoneListCtrl', function(){
        var scope, ctrl
        beforeEach(module('PhonecatApp'));

        beforeEach(inject(function($controller){
                var scope = {},
                ctrl = $controller('PhoneListCtrl', {$scope:scope});
            }));
        it('should create "phones"  model with 3 phones', function(){
            except(scope.phones.length).toBe(3);
        });

        it('should set the default value of oerderProp model', function(){
            except(scope.oerderProp).toBe('age');
        });
    });
});








































