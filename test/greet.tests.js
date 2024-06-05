describe('The greet function test status :' , function(){
    it('The greet function passed the assertion tests', function(){
        assert.equal(greet('Bob'), 'Hello, Bob');
        assert.equal(greet('Sam'), 'Hello, Sam');
    });
});
