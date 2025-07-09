let balance=0
function showMenu(){
    console.log("MENU")
     console.log("1.check balance")
      console.log("2.Recharge")
       console.log("3. Use mobile data")
        console.log("4.exit")
}
function balanceCheck(){
    console.log(`your current balance is:${balance}`)
}
function recharge(){
    let recharge=parseFloat(prompt("Enter the amount to recharge"))
    if (recharge>100 && !isNaN(recharge)){
        balance=balance+recharge
    console.log(`${recharge}  recharge successfull your balance is: ${balance}`)


}
else{
    console.log("please enter the recharge amount correctly (above 100)")
}}
function mobile(){
    let data=parseFloat(prompt("Enter data usage amount"))
    if (recharge>balance){
        console.log("insufficient balance")
    }
    
    else{
        balance==recharge
        console.log(`mobile data  your remaining balance is used:${balance}`)
    }

}
function rechargesystem(){
    let choice
    do{
        
        choice=prompt("enter ur choice")
        showMenu()
        switch(choice)
        {

            case"1":balanceCheck()
            break
            case"2":recharge()
            break
            case"3":mobile()
            break
            case"4":console.log("thank you")
            break
            default:
                console.log("invalid choice")
        }}
        while(choice!=='4')
    }

rechargesystem()
