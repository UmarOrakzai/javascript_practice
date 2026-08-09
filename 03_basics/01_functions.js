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
      //  console.log("Please Enter User Name");
        return       

    }
//    console.log(`${username} is loged in`);

}
userLogdinMessage()



// Rest operator 


function CalculateCartPrice(value1, ...price){
   // console.log(price);
    

}
CalculateCartPrice(23,45,66,24)


//Function with object


const user ={
    UserName:'umar',
    UserCity: 'Hangu',
    UserEmail:'umarorakzai@gmail.com'
}


function HandleObject(anyObject){
    console.log(`user name is ${anyObject.UserName}
    city name ${anyObject.UserCity} user email ${anyObject.UserEmail}`);
    
}

HandleObject(user)