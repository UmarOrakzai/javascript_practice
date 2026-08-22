

const ApiKey = '8f668cc52b1f380be02c5afe85e96991'
const CityName = 'Hangu';
 async function weatherInfo(){

    try {
        const Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName},PK&appid=${ApiKey}&units=metric&lang=ur`)
        const data = await Response.json();
        console.log(data);
        
    } catch (error) {

        console.log(error);
        
        
    }

 }