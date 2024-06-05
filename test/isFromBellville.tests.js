describe('The isFromBellville function test status :' , function(){
    it('The isFromBellville function passed the assertion tests', function(){
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
    });
});