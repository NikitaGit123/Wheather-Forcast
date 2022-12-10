const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ff383e24famshe0e97a78b5dd4ccp15c167jsn7f84e227c27f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
    cityName.innerHTML=city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
    // cloud_pct.innerHTML=response.cloud_pct
    temp.innerHTML= response.temp
    feels_like.innerHTML=response.feels_like
    humidity.innerHTML=response.humidity
    min_temp.innerHTML=response.min_temp
    max_temp.innerHTML=response.max_temp
    wind_speed.innerHTML=response.wind_speed
    wind_degrees.innerHTML=response.wind_degrees
    sunrise.innerHTML=response.wind_degrees
    sunset.innerHTML=response.sunset
        
    })
	.catch(err => console.error(err));

    }
    
    submit.addEventListener("click",(e)=>{
        e.preventDefault();
        getWeather(city.value)
    })

    getWeather("delhi")

    const getOtherCityData=(cities)=>{
        let Newarr=[];
        const container = document.getElementById('outerdata');
        cities.forEach((e,i)=>{
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+e, options)
        .then(response => response.json())
        .then(response => {
            Newarr.push(response)
            // console.log(Newarr);
            Newarr.forEach((s,i)=>{
              container.innerHTML=
              `
              <tr>
              <th scope="row" class="text-start">${e}</th>
              <td >${s.sunset}</td>
              <td >${s.min_temp}</td>
              <td >${s.max_temp}</td>
              </tr>
              `
            })
        })
        .catch(err => console.error(err));
    });
        }
    getOtherCityData(["Austin","Chicago"])
    
    
    

      
   


    