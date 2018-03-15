function Phone(brand, price, color, ram, weight) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.ram = ram;
	this.weight = weight;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". It also have " + this.ram + " GB and " + this.weight + " g.");
}

var iPhone6S = new Phone("Apple", 2250, "silver", 8, 100);

iPhone6S.printInfo();

var samsungGalaxyS6 = new Phone("Samsung", 1230, "black", 12, 300);

samsungGalaxyS6.printInfo();

var onePlusOne = new Phone("Oppo", 7250, "silver", 24, 666);

onePlusOne.printInfo();
