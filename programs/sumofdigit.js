let sum=0, r
 let numb=Number(prompt("enter the number"))
while(numb>0)
    {
    r=numb % 10
    sum=sum + r
    numb=parseInt(numb/10)
}
console.log("sum of digit is",sum)