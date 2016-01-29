function Customer(customerName, customerAddress, customerPhone) {
	this.customerName = String(customerName);
	this.customerAddress = String(customerAddress);
	this.customerPhone = String(customerPhone);
}

function Pizza(quantity, size) {
  this.quantity = quantity;
  this.size = size;
  this.vegatableTopping = [];
  this.meatTopping =[];
};

Pizza.prototype.cost = function() {
  var totalCost = 8 + (this.vegatableTopping.length * 1) + (this.meatTopping.length * 2);

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

$(document).ready(function() {

  $("form#order-form").submit(function(event) {
    var quantity = $("input#quantity").val();
    var size = $("select#size").val();
    var newPizza = new Pizza(quantity, size);
    var vegatableTopping = $("input.vegatable:checkbox:checked").each(function() {
      newPizza.vegatableTopping.push(vegatableTopping);
    });

    var meatTopping = $("input.meat:checkbox:checked").each(function() {
      newPizza.meatTopping.push(meatTopping);
    });

    var pizzaPrice = newPizza.cost();

    $("#price").text(pizzaPrice);

    $("#result").show();

    event.preventDefault();
  });
});
