describe ("The transportFee function test status :", function() {
    it("The transportFee function passed the assertion tests", function () {
        assert.equal(transportFee('morning'), 'R20');
        assert.equal(transportFee('afternoon'), 'R10');
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    })
})