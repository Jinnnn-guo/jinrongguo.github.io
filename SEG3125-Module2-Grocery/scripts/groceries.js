	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		lactoseFree: true,
		nutsFree: true,
		price: 1.99
	},
	{
		name: "bread",
		lactoseFree: true,
		nutsFree: true,
		price: 2.35
	},
	{
		name: "salmon",
		lactoseFree: true,
		nutsFree: true,
		price: 10.00
	},
	{
		name: "peanut butter",
		lactoseFree: true,
		nutsFree: false,
		price: 3.45
	},
	{
		name: "milk",
		lactoseFree: false,
		nutsFree: true,
		price: 4.7
	},
	{
		name: "water",
		lactoseFree: true,
		nutsFree: true,
		price: 1.99
	},
	{
		name: "apple",
		lactoseFree: true,
		nutsFree: true,
		price: 3.99
	},
	{
		name: "banana",
		lactoseFree: true,
		nutsFree: true,
		price: 2.65
	},
	{
		name: "cheese",
		lactoseFree: false,
		nutsFree: true,
		price: 8.99
	},
	{
		name: "yogurt",
		lactoseFree: false,
		nutsFree: true,
		price: 4.99
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactoseFree") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "nutsFree") && (prods[i].nutsFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
