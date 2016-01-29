function Customer(customerName, customerAddress, customerPhone) {
	this.customerName = String(customerName);
	this.customerAddress = String(customerAddress);
	this.customerPhone = String(customerPhone);
}

function Pizza(quantity, size) {
	this.quantity = quantity;
	this.size = size;
	this.topping = [];
};

Pizza.prototype.Cost = function() {
	var totalCost = 8 + (this.topping.length * 1);

	if (this.size == "small") {
		return totalCost * this.quantity;
	} else if (this.size == "medium") {
		return (totalCost + 4) * this.quantity;
	} else if (this.size == "large") {
		return (totalCost + 10) * this.quantity;
	} else if (this.size == "x-large") {
		return (totalCost + 14) * this.quantity;
	}
};