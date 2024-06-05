describe ("The yearsAgo function test status :", function(){
    it("The yearsAgo function passed the assertion tests", function (){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    })
})