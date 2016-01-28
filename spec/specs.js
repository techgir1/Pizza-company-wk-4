describe("Customer", function() {
	it("creates a new customer", function() {
		var testCustomer = new Customer("Beth", "1116 SE Division St", "503-111-1116");
		expect(testCustomer.customerName).to.equal("Beth");
		expect(testCustomer.customerAddress).to.equal("1116 SE Division St");
		expect(testCustomer.customerPhone).to.equal("503-111-1116")
	});

	it("handles a phone number as a string", function() {
		var testCustomer = new Customer("Beth", "1116 SE Division St", "503-111-1116");
		expect(testCustomer.customerPhone).to.be.a("string");
	});
});