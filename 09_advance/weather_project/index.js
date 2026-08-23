

const ApiKey = '8f668cc52b1f380be02c5afe85e96991'
let CityName = 'Hangu';
const city = document.getElementById('city')
const temp = document.getElementById('temp')
const description = document.getElementById('description')
const icons = document.getElementById('icons')
const Humidity = document.getElementById('col')
const windSpeed = document.getElementById('wind-speed')
const forms = document.querySelector('form')


 
 async function weatherInfo(){

    try {
        const Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName},PK&appid=${ApiKey}&units=metric&lang=ur`)
        const data = await Response.json();
        console.log(data);
        city.innerHTML = `${data.name}, PK`;
        console.log(data.main);
        temp.innerHTML = `${data.main.temp}°C`
        console.log(description);
        
        description.innerHTML = `${data.weather[0].description}`;
        const iconCode = data.weather[0].icon;
         icons.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
         const humValue = data.main.humidity ;
         Humidity.innerHTML = `💧 Humidity: ${humValue}%`;
         const speed = data.wind.speed;
         windSpeed.innerHTML = `Wind: ${speed} km/h`
        
       
            
        
              
    } catch (error) {
        city.innerHTML = "City Not Found"

        
        
        
    }

 }
 forms.addEventListener('submit', function(e){
    e.preventDefault();

    CityName = document.querySelector('input').value;
    console.log(CityName);
    weatherInfo();
    
   // console.log(e);
    
})
 