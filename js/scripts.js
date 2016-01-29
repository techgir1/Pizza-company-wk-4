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