'use strict';

describe('service', function(){
    beforeEach(module('phonecatApp'));

    it('check the existence of Phone Factory', inject(function(Phone){
        expect(Phone).toBeDefined();
    }));
});