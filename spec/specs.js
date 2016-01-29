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

describe("Pizza", function() {
	it("creates a custom pizza", function() {
		var testPizza = new Pizza(1, "large");
		expect(testPizza.quantity).to.equal(1);
		expect(testPizza.size).to.equal("large");
		expect(testPizza.topping).to.eql([]);
	});
});

describe("Cost", function() {
	it("returns the price of a small pizza with one topping", function() {
		var testPizza = new Pizza(1, "small");
		expect(testPizza.Cost()).to.equal(8);
	});
});