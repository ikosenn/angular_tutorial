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
            var scope, $httpBackend, ctrl;
            beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller){
                $httpBackend = _$httpBackend_;
                $httpBackend.expectGET('phones/xyz.json').respond({name:'phone xyz'});
                $routeParams.phoneId = 'xyz';
                scope = $rootScope.$new();
                ctrl = $controller('PhoneDetailCtrl', {$scope:scope});
            }));

            it('should fetch phone detail', function(){
                expect(scope.phone).toBeUndefined();
                $httpBackend.flush();
                expect(scope.phone).toEqual({name:'phone xyz'});
            });

        });
    });
});








































