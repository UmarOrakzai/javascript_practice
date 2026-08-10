const user={
username : 'umar',
useremail : 'umarorakzai@gmail..com',

welcomemessag : function(){
    console.log(`${this.username} welcome to my website`);
    
}


}

user.welcomemessag();



//Arrow Function 

// const addtow = (num1, num2)=> 
//   {
//       return num1 + num2
//   }


//   addtow()


  const addtow = (num1, num2)=>  num1 + num2
  


console.log(addtow(22, 66));
 