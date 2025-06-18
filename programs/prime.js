let k,a=0,n
n=Number(prompt("enter your number"))
for(k=2;k<n;k++)
    
{
    
    if(n%k===0){
        a=1
        break
    }

}
if(a==0){
    console.log( n," is prime  number")
}
else{
    console.log( n,"  is not a prime number")
}

