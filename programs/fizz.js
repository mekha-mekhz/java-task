
let num=Number(prompt("enter the number"))
let i
for(i=1;i<=num;i++)
{
    if((i%3===0 )&& (i%5===0))
        {
    console.log("fizz buzz")
}
    
    else if(i%5===0){
        console.log("buzz")
    }
else if(i%3===0){
        console.log("fizz")
    }

    else{
        console.log(i)
    }

}
