describe ("The totalPhoneBill function test status :", function (){
    it("The totalPhoneBill function passed the assertion tests", function () {
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    })
})