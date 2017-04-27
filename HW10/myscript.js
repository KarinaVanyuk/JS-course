var id=0;
var idF=0;
var products= new Array();
function product(name,type,cost,date){
	this.name=name
	this.type=type
	this.cost=cost
	this.date=date
}
product.prototype.id=function(){
	id++
 this.id=id;
}
function food(name,cost,date,date1){
	this.name=name
	this.type='food'
	this.cost=cost
	this.date=date
	this.date1=date1
	products.push(this)

}
for (var i = 0; i < products.length; i++) {
	Object.defineProperty(products[i], "storage",
 {
 	value: products[i].date1.getMonth() - products[i].date1.getMonth(),
 	writable: false
 })
};
food.prototype.id=function(){
	idF++
 this.id=idF;
}
// function score(name,address,markup){
// 	this.name:name,
// 	this.address:,
// 	product:,
// 	this.markup:,
// 	this.income:
// }
var prod=new food('курица','50',new Date("2017-01-15 "), new Date("2017-03-15"))
var prod1=new food('мясо','50',new Date("1998-10-08 12:12:12:12"), new Date("1998-12-08 12:12:12:12"))
