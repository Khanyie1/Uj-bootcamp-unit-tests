describe ("The sameWeekday function test status :", function() {
    it("The sameWeekday function passed the assertion tests", function () {
        assert.equal(sameWeekday('2016-11-19', '2016-11-26'), true);
        assert.equal(sameWeekday('2016-11-19', '2016-11-28'), false);
    })
})