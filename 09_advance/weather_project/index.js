

const ApiKey = '8f668cc52b1f380be02c5afe85e96991'
let CityName = 'Hangu';
const city = document.getElementById('city')
const temp = document.getElementById('temp')
const description = document.getElementById('description')
const forms = document.querySelector('form')


 
 async function weatherInfo(){

    try {
        const Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName},PK&appid=${ApiKey}&units=metric&lang=ur`)
        const data = await Response.json();
        console.log(data);
        city.innerHTML = `${data.name}, PK`;
        console.log(data.main);
        temp.innerHTML = `${data.main.temp}`
        console.log(description);
        
        description.innerHTML = `${data.weather[0].description}`
        if(data.weather[0].icon === '10n')
        {
            document.getElementById('icon').innerHTML = '10n' 
        }
              
    } catch (error) {

        console.log(error);
        
        
    }

 }
 forms.addEventListener('submit', function(e){
    e.preventDefault();

    CityName = document.querySelector('input').value;
    console.log(CityName);
    weatherInfo();
    
   // console.log(e);
    
})
 