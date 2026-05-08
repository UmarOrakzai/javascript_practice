//array

const myArray = [1,2,3,4,5,6,7,8,9]


console.log(myArray);
console.log(myArray[2]);

//Adding element with array method
myArray.push(100)
console.log(myArray);

//Remove Element from last
myArray.pop()
console.log(myArray);


//Remove Element from first index
myArray.shift()
console.log(myArray);

// Adding Element in Array On First index
myArray.unshift(77)
console.log(myArray);

//Finding Element in Array
console.log(myArray.includes(200));

const newArray = myArray.join()
console.log(myArray);
console.log(newArray);

console.log(myArray.slice(1,3));
console.log(myArray.splice(1,3));











