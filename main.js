var i = 2;
var apiURL_1 = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var apiUrl_forecast_1 = "https://api.openweathermap.org/data/2.5/forecast?q=";
var apiUrl_2 = "&appid=5d02d418a19461f0d1b866c0867a61d4";
async function Weather()
{
    const searchInp = document.getElementById("inp").value;
    const response = await fetch(apiURL_1 + searchInp + apiUrl_2);
    var data = await response.json();
    console.log(data.main.temp_min);
    document.getElementById("temp").innerHTML = data.main.temp + " °C";
    document.getElementById("humidity").innerHTML = data.main.humidity + " %";
    document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
    document.getElementById("pressure").innerHTML = data.main.pressure + " KPa";
    document.getElementById("feels").innerHTML = data.main.feels_like + " °C";
    document.getElementById("min_temp").innerHTML = data.main.temp_min + " °C";
    document.getElementById("max_temp").innerHTML = data.main.temp_max + " °C";
    if(data.weather[0].main == 'Clear')
        document.getElementById("state").src = "images/images/clear.png";
    else if(data.weather[0].main == 'Clouds')
        document.getElementById("state").src = "images/images/clouds.png";
    else if(data.weather[0].main == 'Drizzle')
        document.getElementById("state").src = "images/images/drizzle.png";
    else if(data.weather[0].main == 'Mist')
        document.getElementById("state").src = "images/images/mist.png";
    else if(data.weather[0].main == 'Rain')
        document.getElementById("state").src = "images/images/rain.png";
    else if(data.weather[0].main == 'Snow')
        document.getElementById("state").src = "images/images/snow.png";


}
function switch_lang()
{
    if(i % 2 == 0)
    {
        document.getElementById("lang").innerHTML = "Сменить язык";
        document.getElementById("pres_text").innerHTML = "Давление";
        document.getElementById("feels_text").innerHTML = "Ощущается как";
        document.getElementById("hum_text").innerHTML = "Влажность";
        document.getElementById("wind_text").innerHTML = "Скорость Ветра";
        document.getElementById("min_text").innerHTML = "Мин. Температура";
        document.getElementById("max_text").innerHTML = "Макс. Температура";
        document.getElementById("inp").placeholder = "Выберите город";
        i++;
    }
    else
    {
        document.getElementById("lang").innerHTML = "Switch language";
        document.getElementById("pres_text").innerHTML = "Pressure";
        document.getElementById("feels_text").innerHTML = "Feels like";
        document.getElementById("hum_text").innerHTML = "Humidity";
        document.getElementById("wind_text").innerHTML = "Wind Speed";
        document.getElementById("min_text").innerHTML = "Min. Temperature";
        document.getElementById("max_text").innerHTML = "Max. Temperature";
        document.getElementById("inp").placeholder = "Choose city";
        i++;
    }
}

async function Forecast()
{
    const searchInp = document.getElementById("inp").value;
    const response_1 = await fetch(apiUrl_forecast_1 + searchInp + apiUrl_2 + "&units=metric");
    var data_forecast = await response_1.json();
    var j = 0;
    console.log(data_forecast);

    for(var i = 0; i <= 4; i++)
    {
        var img_numb = "forecast_img_" + i;
        var time_numb = "time_" + i;
        var temp_numb = "forecast_temp_" + i;
        if(data_forecast.list[i].weather[0].main == 'Clear')
            document.getElementById(img_numb).src = "images/images/clear.png";
        else if(data_forecast.list[i].weather[0].main == 'Clouds')
            document.getElementById(img_numb).src = "images/images/clouds.png";
        else if(data_forecast.list[i].weather[0].main == 'Drizzle')
            document.getElementById(img_numb).src = "images/images/drizzle.png";
        else if(data_forecast.list[i].weather[0].main == 'Mist')
            document.getElementById(img_numb).src = "images/images/mist.png";
        else if(data_forecast.list[i].weather[0].main == 'Rain')
            document.getElementById(img_numb).src = "images/images/rain.png";
        else if(data_forecast.list[i].weather[0].main == 'Snow')
            document.getElementById(img_numb).src = "images/images/snow.png";

        document.getElementById(time_numb).innerHTML = data_forecast.list[i].dt_txt.slice(11, 16);
        document.getElementById(temp_numb).innerHTML = data_forecast.list[i].main.temp + " °C";
    }

    var day_numb = Number(data_forecast.list[0].dt_txt.slice(8, 10));

   for(var i = 1; i < 40; i++)
    {
        if(Number(data_forecast.list[i].dt_txt.slice(8, 10)) != day_numb)
        {
            var day_text = "day_" + j;
            var img_numb = "forecast_days_img_" + j;
            var temp_numb = "forecast_days_temp_" + j;
            day_numb = data_forecast.list[i].dt_txt.slice(8, 10);
            document.getElementById(day_text).innerHTML = data_forecast.list[i].dt_txt.slice(8, 10) + "." + data_forecast.list[i].dt_txt.slice(5,7);
            if(data_forecast.list[i].weather[0].main == 'Clear')
                document.getElementById(img_numb).src = "images/images/clear.png";
            else if(data_forecast.list[i].weather[0].main == 'Clouds')
                document.getElementById(img_numb).src = "images/images/clouds.png";
            else if(data_forecast.list[i].weather[0].main == 'Drizzle')
                document.getElementById(img_numb).src = "images/images/drizzle.png";
            else if(data_forecast.list[i].weather[0].main == 'Mist')
                document.getElementById(img_numb).src = "images/images/mist.png";
            else if(data_forecast.list[i].weather[0].main == 'Rain')
                document.getElementById(img_numb).src = "images/images/rain.png";
            else if(data_forecast.list[i].weather[0].main == 'Snow')
                document.getElementById(img_numb).src = "images/images/snow.png";

            document.getElementById(temp_numb).innerHTML = data_forecast.list[i+5].main.temp + " °C";
            console.log(i);

            j++;
        }
    }
}

document.getElementById("search").addEventListener("click", function(){
        Weather();
        Forecast();
    }
);
document.getElementById("switch_lang").addEventListener("click", switch_lang);