const languages = ['javascript', 'python', 'java', 'C++']

// languages.forEach(function(item){
//     console.log(item);
    
// })

// With Arrow Function


// languages.forEach((item)=>{
//     console.log(item);
    
// })


// function printme(item){
//     console.log(item);
    
// }

// languages.forEach(printme)


// languages.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
    

// })


const myCoding = [
    {
        languageName: 'javascript',
        languageFile: 'js'
    },
    {
        languageName: 'java',
        languageFile: 'java'
    },
    {
        languageName: 'python',
        languageFile: 'py'
    },
]

myCoding.forEach((item)=>{
    
    console.log(item.languageName);
    
})