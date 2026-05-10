const user = {
    name:'Umar',
    age: 29,
    city: 'Hangu',
    email: 'umar@gmail.com',
    lastlogin: ['monday','tuesday'],
    FullName: {
        userFullName:{
            firstName:'Hazrat',
            lastName:'umar'
        }
    }
}

//Accesing Object value By DOT. 

console.log(user.name);

//Accesing Object value By Brackets []. 
console.log(user['age']);
console.log(user['lastlogin']);


//OvereWrite the object value

user.email = 'umar315@gmial.com'
console.log(user.email);
console.log(user.FullName.userFullName.firstName);


const objone = {
    one:'1',
    two:'2'
}
const onjtwo = {three:'3',four:'4'}

const allObj = {...objone, ...onjtwo}
console.log(allObj);


const users = [
    {
    name:'Umar',
    age: 29,
    city: 'Hangu',
    email: 'umar@gmail.com',
    lastlogin: ['monday','tuesday'],
    FullName: {
        userFullName:{
            firstName:'Hazrat',
            lastName:'umar'
        }
    }
},
{
    name:'Umar',
    age: 29,
    city: 'Hangu',
    email: 'umar@gmail.com',
    lastlogin: ['monday','tuesday'],
    FullName: {
        userFullName:{
            firstName:'Hazrat',
            lastName:'umar'
        }
    }
},
{
    name:'JS',
    age: 29,
    city: 'Hangu',
    email: 'umar@gmail.com',
    lastlogin: ['monday','tuesday'],
    FullName: {
        userFullName:{
            firstName:'Hazrat',
            lastName:'umar'
        }
    }
}
]

console.log(user[2].name);


console.log(users[2].FullName.userFullName.firstName);






 

