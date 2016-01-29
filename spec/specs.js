
describe("Pizza", function() {
	it("creates a custom pizza", function() {
		var testPizza = new Pizza(1, "large");
		expect(testPizza.quantity).to.equal(1);
		expect(testPizza.size).to.equal("large");
		expect(testPizza.vegatableTopping).to.eql([]);
		expect(testPizza.meatTopping).to.eql([]);
	});
});

describe("Cost", function() {
	it("returns the price of a small pizza with one topping", function() {
		var testPizza = new Pizza(1, "small");
		expect(testPizza.Cost()).to.equal(8);
	});

	it("returns the price of a medium pizza with one topping", function() {
		var testPizza = new Pizza(1, "medium");
		expect(testPizza.Cost()).to.equal(12);
	});

	it("returns the price of a large pizza with one topping", function() {
		var testPizza = new Pizza(1, "large");
		expect(testPizza.Cost()).to.equal(18);
	});

	it("returns the price of an x-large pizza with one topping", function() {
		var testPizza = new Pizza(1, "x-large");
		expect(testPizza.Cost()).to.equal(22);
	});
});