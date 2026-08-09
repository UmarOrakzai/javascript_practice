function myname(){
//    console.log("My name is Umar");
    
}
myname()





function addTwoNum(number1, number2){
  //  console.log(number1 + number2)

}

addTwoNum(5,7)



function addTwoNum(number1, number2){
    return number1 + number2

}

const result = addTwoNum(5,7)
//console.log('Result is:', result);





function userLogdinMessage(username){
    if(username === undefined){
        console.log("Please Enter User Name");
        return
        

    }
    console.log(`${username} is loged in`);
    

}


userLogdinMessage()