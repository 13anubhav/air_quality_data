
function getAirQuality() {
    const city = document.getElementById("city").value;
    const apikey = "5e937b4952msh0cd60cae124352dp1bd119jsna9ca7300a732";

    fetch(`https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "air-quality-by-api-ninjas.p.rapidapi.com",
        "x-rapidapi-key": apikey
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `
      
      The Compositions of Air in ${city} are as Follows :-
      </br>  </br>

      Carbon monoxide (CO) Concentration = ${data.CO.concentration} µg/m³
     </br>
     Carbon monoxide (CO) Air Quality Index = ${data.CO.aqi} 
    </br>  </br>

    Nitrogen dioxide (NO₂) Concentration = ${data.NO2.concentration} µg/m³
     </br>
    Nitrogen dioxide (NO₂) Air Quality Index = ${data.NO2.aqi}
    </br>  </br>

    Ozone (O₃) Concentration = ${data.O3.concentration} µg/m³
     </br>
     Ozone (O₃) Air Quality Index = ${data.O3.aqi}
    </br>  </br>

    

    Sulphur dioxide (SO₂) Concentration = ${data.SO2.concentration} µg/m³
     </br>
     Sulphur dioxide (SO₂) Air Quality Index = ${data.SO2.aqi}
    </br>  </br>

    Particulate Matter (PM10) Concentration = ${data.PM10.concentration} µg/m³
     </br>
     Particulate Matter (PM10) Air Quality Index = ${data.PM10.aqi}
    </br> </br>


    <bold>Overall </bold> Air Quality Index in ${city} = ${data.PM10.aqi}


      
      `;
      var z=data.PM10.aqi;
    })


    
    .catch(error => {
      console.error(error);
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `Error: ${error.message}`;
    });
  }
