let n,rev,count
count=0
n=Number(prompt("enter the number"))
while(n>0)
{
    n=parseInt(n/10)
    count++
}
console.log("number of digits  is",count)