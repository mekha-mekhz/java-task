const button=document.getElementById('load')
button.addEventListener('click',async()=>{
    console.log("button clicked")
const added=document.getElementById('adding')
added.textContent="LOADING..."
try{
    let listhtml=`<ul>`
        const response= await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(response)
    const users= await response.json()
    for(let i=0;i<users.length;i++)
    {
        console.log(users[i])
        listhtml=listhtml+`
         
        <li> id:${users[i].id}</li>

          <li> ${users[i].address.suite}</li>
            <li>${users[i].address.zipcode} </li>
              <li>${users[i].email} </li>
                 `
    }

listhtml+=`</ul>`
added.innerHTML=listhtml
    }
    catch(err){
        console.log(err.message)
    }
})
