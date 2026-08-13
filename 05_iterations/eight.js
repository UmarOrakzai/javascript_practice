const mynumbers = [1,3,4,5]


// const mytotal = mynumbers.reduce( function(acc, currentval){
//     return acc + currentval

// })

// console.log(mytotal);

// const mytotal = mynumbers.reduce( (acc, currentval)=> acc+currentval, 0)

// /console.log(mytotal);

const Courses = [
    {
    courseName: 'javascript',
    price:     15000
},
{
    courseName: 'C++',
    price:     10000
},
{
    courseName: 'python',
    price:     25000
},
]

const pricetoPay = Courses.reduce((acc, item)=>{
    return acc+item.price

},0)


console.log(pricetoPay);


