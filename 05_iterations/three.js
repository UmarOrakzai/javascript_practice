const arr = [1,2,3,4,5,5,6]

for (const i of arr) {

    console.log(i);
    
    
}

const greetings = 'Hello World'


for (const greet of greetings) {


    console.log(greet);
    
    
}

const map = new Map()
map.set('PK', "PAKISTAN")
map.set('USA', "UNITED STATES OF AMARICA")
map.set('FR', "FRANCE")
 console.log(map);


 for (const [key, value] of map) {

    console.log(key, ':-', value);
    
    
 }


 const myObject = {
    game1: 'PUBG',
    game2: 'FREE FIRE',
    game3: 'NFS'
 }

// for of loop will not work for object iteration
//  for (const [key, value] of myObject) {

//     console.log(key, ':-', value);
    
    
//  }



 

