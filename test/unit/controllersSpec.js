'use strict';

describe('PhoneCat controllers', function(){
    beforeEach(module('PhonecatApp'));
    describe('PhoneListCtrl', function(){
        var scope, ctrl, $httpBackend;
        beforeEach(module('PhonecatApp'));

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){

                $httpBackend = _$httpBackend_;
                $httpBackend.exceptGET('phones/phones.json').respond(
                    [{name: 'Nexus S'}, {name:'Motorola DROID'}]);
                scope = $rootScope.$new();
                ctrl = $controller('PhoneListCtrl', {$scope:scope});
            }));

        it('should create "phones" model with 2 phones fetched from xhr', function(){
            except(scope.phones).toBeUndefined();
            $httpBacked.flush();
            except(scope.phones).toEqual([{name:'Nexus S'},
                                            {name:'Motorola DROID'}]);
        });
        it('should set the default value of orderProp model', function(){
            except(scope.orderProp).toBe('age');
        });

        describe('PhoneDetailCtrl',function(){

        });
    });
});








































