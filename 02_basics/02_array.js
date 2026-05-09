const araryOne = ['khan', 'Huzaifa', 'Jamal']
const arrayTwo = ['Umar', 'Ali', 'Usman']

//connnect arays in one array through spread oprtr

const AllNames =[...araryOne, ...arrayTwo]
console.log(AllNames);


const anotherArray = [1,2,3,[4,5],6,7,[8,9],10]


const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);


console.log(Array.isArray('javascript'));
console.log(Array.from('javascript'));

