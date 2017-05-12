var id = 0;
var idF = 0;
// var products = new Array();
// var mag = new Array();
function Product(name, type, cost, date){
	this.identificator=++id;
	this.name = name;
	this.type = type;
	this.cost = cost;
	this.release = date;
}

function FoodProduct(name, cost, date, valid){
	this.id=++idF;
	this.name = name;
	this.type = 'еда';
	this.cost = cost;
	this.release = date;
	this.valid = valid;
	Object.defineProperty(this, "storage",
	{
		value: this.valid.getMonth() - this.release.getMonth()+" months"+""+(this.valid.getDay() - this.release.getDay()+" days"),
		writable: false
	})
}


function Shop(name, addres, markUp,products){
	this.name = name;
	this.addres = addres;
	this.markUp	= markUp;
	this.products=[]
	this.income=0;
	Object.defineProperty(this, "sum", {
		get: function(){
			var sum = 0;
			for(var i = 0; i < this.products.length; i++){
				sum += this.products[i].cost;
			}
			return sum;
		}
})}
Shop.prototype.addProducts = function(t,n){
	for(var i = 0; i < n; i++){
		this.products.push(t);
	}
}
Shop.prototype.removeProduct=function(n){
	for(var i = 0; i<n; i++)
	this.products.pop();
}
Shop.prototype.sellProduct = function(name){
	for(var i = 0; i < this.products.length; i++){
		if(this.products[i].name === name){
			this.products.splice(i, i+1);
			this.income += this.products[i].cost;
		}
	}
}
Shop.prototype.Info = function(){
	var str ='';
	str+= this.name;
	str+= ','+this.addres;
	str+= ','+this.markUp;
	return str;
}
function Market(){
	this.mag = [];
}

Market.prototype.addShop = function(shop){
	this.mag.push(shop);
}
var shop1 = new Shop('Магазин1','Pinsk', 0.2);
var shop2 = new Shop('Магазин2','Minsk', 0.2);
var prod3=new Product('мясо','pencil',10,new Date("2016-5-7 12:12:12:12"))
var prod1 = new FoodProduct('мясо',50,new Date("2016-5-7 12:12:12:12"), new Date("2016-7-10  12:12:12:12"));
var prod2 = new FoodProduct('конфеты',10,new Date("2016-8-10 12:12:12:12"), new Date("2016-10-10 12:12:12:12"));
shop1.addProducts(prod1,1);
shop1.addProducts(prod2,2);
shop1.addProducts(prod3,2);
console.log('Магазин'+'-'+shop1.name)
console.log('Информация о магазине'+'-'+shop1.Info())
console.log('Количество товаро в магазине'+'-'+shop1.products.length)
shop1.removeProduct(1)
console.log('После списывания'+'-'+shop1.products.length)
console.log('Общая стоимоть товаров'+'-'+shop1.sum)
console.log('Прибыль магазина'+'-'+shop1.income)
shop1.sellProduct('конфеты')
console.log('Прибыль магазина после продажи товара'+'-'+shop1.income)
var market = new Market();
market.addShop(shop1)
market.addShop(shop2)
console.log('Магазины на рынке'+'-'+market.mag.length)

