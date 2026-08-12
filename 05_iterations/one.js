for (let i = 0; i <= 10; i++) {
    const element = i;

    console.log(i);
    
    
}

for (let i = 0; i <= 10; i++) {
   // console.log(`Outer loop ${i}`);

    for (let j = 0; j <= 10; j++) {
       // console.log(`Inner Loop ${j}`);

      // console.log(`${i}*${j} = `+ i*j);
    }
    
}


const users = ['umar', 'Ali', 'Ahmad']


for (let index = 0; index < users.length; index++) {
    const element = users[index];

    console.log(element); 
    
}



for (let index = 0; index < 20; index++) {
    if(index ==5){
        console.log('Detected 5');
        break
        
    }
    console.log(`value of index is ${index}`);
    
    
}
for (let index = 0; index < 20; index++) {
    if(index ==5){
        console.log('Detected 5');
        continue
        
    }
    console.log(`value of index is ${index}`);
    
    
}