	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		lactoseFree: true,
		organic: true,
		nutsFree: true,
		price: 1.99
	},
	{
		name: "water",
		lactoseFree: true,
		organic: false,
		nutsFree: true,
		price: 1.99
	},
	{
		name: "bread",
		lactoseFree: true,
		organic: false,
		nutsFree: true,
		price: 2.35
	},
	{
		name: "banana",
		lactoseFree: true,
		organic: true,
		nutsFree: true,
		price: 2.65
	},

	{
		name: "peanut butter",
		lactoseFree: true,
		organic: false,
		nutsFree: false,
		price: 3.45
	},
	{
		name: "apple",
		lactoseFree: true,
		organic: true,
		nutsFree: true,
		price: 3.99
	},
	{
		name: "milk",
		lactoseFree: false,
		organic: true,
		nutsFree: true,
		price: 4.7
	},
	{
		name: "yogurt",
		lactoseFree: false,
		organic: false,
		nutsFree: true,
		price: 4.99
	},


	{
		name: "cheese",
		lactoseFree: false,
		organic: false,
		nutsFree: true,
		price: 8.99
	},

	{
		name: "salmon",
		lactoseFree: true,
		organic: true,
		nutsFree: true,
		price: 10.00
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
		else if ( (restriction == "lactoseFree and nutsFree")  && (prods[i].lactoseFree == true) && (prods[i].nutsFree == true) ) {
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
		else if((restriction == "organic")&&(prods[i].organic == true)){
			product_names.push(prods[i].name);
		}

	}
	return product_names;
}
function restrictListProductsPrice(prods, restriction) {
	let product_price = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactoseFree") && (prods[i].lactoseFree == true)){
			product_price.push(prods[i].price);
		}
		else if ((restriction == "nutsFree") && (prods[i].nutsFree == true)){
			product_price.push(prods[i].price);
		}
		else if ( (restriction == "lactoseFree and nutsFree")  && (prods[i].lactoseFree == true) && (prods[i].nutsFree == true) ) {
			product_price.push(prods[i].price);
		}
		else if (restriction == "None"){
			product_price.push(prods[i].price);
		}
		else if((restriction == "organic")&&(prods[i].organic == true)){
			product_price.push(prods[i].price);
		}

	}
	return product_price;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	let totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name+": "+products[i].price) >-1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
