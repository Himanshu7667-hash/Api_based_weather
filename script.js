const searchBox = document.querySelector(".search input");
const searchbutton = document.querySelector(".search button");
async function checkweather(city){
const response = await fetch("http://api.weatherapi.com/v1/current.json?key=497cb2ee3eac4805903103256240402&q=" + city);
         var data = await response.json();

         console.log(data);

         const searchBox = document.querySelector(".search input");
         const searchbutton = document.querySelector(".search button");
           
        document.querySelector(".Temp").innerHTML = data.location.name;
        document.querySelector(".city").innerHTML = Math.round(data.current.temp_c) + "°C";
    
}
searchbutton.addEventListener("click", ()=>{
             checkweather(searchBox.value);
})

