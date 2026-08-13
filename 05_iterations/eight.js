const mynumbers = [1,3,4,5]


const mytotal = mynumbers.reduce( function(acc, currentval){
    return acc + currentval

})

console.log(mytotal);
