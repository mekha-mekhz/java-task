let product=1, r
 let numb=Number(prompt("enter the number"))
while(numb>0)
    {
    r=numb % 10
    product=product * r
    numb=parseInt(numb/10)
}
console.log("product of digit is",product)