function One()
{
    const username = 'umar'

    function Two(){
        const userEmail = 'umarorakzai@gmail.com'
        console.log(username);
        
    }
    Two()

    //it will not access becouse  scope concept
   // console.log(userEmail);
}
//One();


if(true){
    const username = 'umar'
    if(username === 'umar'){
        const userEmail = 'umarorakzai315@gmail.com'
        console.log(username + userEmail);
        
    }
    //console.log(userEmail);
    
}