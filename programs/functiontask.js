function pizzaOrder(mode,price,callback){
console.log(mode,"pizza ")
callback (price) }
function onlineBooking(price)
{
console.log(" ordered online sucessfully")
const total=price+40
console.log("total is",total)
}
function selfPickup(price)
{
console.log("delivered sucessfully ")
const total=price+15
console.log("total is",total)
}
function dininng(price)
{
console.log(" serving your pizza")

console.log("total is",price)
}
function appBooking(price)
{
console.log("ordered through app  sucessfully")
const total=price+40
console.log("total is", total)
}
pizzaOrder("chicken",250,onlineBooking)
pizzaOrder("beef",270,selfPickup)
pizzaOrder("vegtable",210,dininng)
pizzaOrder("normal",200,appBooking)


