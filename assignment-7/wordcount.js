let n,count
count=0
word=false
n="hello how are you nice to meet you "
for(let i=0;i<n.length;i++)
{


if(n[i]===" ")
{
    word=false
}
else if(!word){
    count++
    word=true
}
}
console.log(count)