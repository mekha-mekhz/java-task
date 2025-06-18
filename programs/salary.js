let bs=Number(prompt("ENTER YOUR BASIC SALARY"))
let hr,da,pf,net

if(bs<10000)
    {
    da=bs*(25/100)
    hr=bs*(30/100)
    pf=bs*(8/100)
    
}
else if (bs >=10000&&bs <20000)
    {
    da=bs*(20/100)
    hr=bs*(25/100)
    pf=bs*(6/100)
    
}else if (bs>= 20000 && bs< 30000)
    {
    da=bs*(15/100)
    hr=bs*(20/100)
    pf=bs*(4/100)
     
}else(bs>30000)
{
     da=bs*(10/100)
    hr=bs*(15/100)
    pf=bs*(2/100)
     
}
 net=(bs+hr+da)-pf
    console.log("your salary is",net)





