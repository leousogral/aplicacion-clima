let urlBase = "https://api.openweathermap.org/data/2.5/weather";
let api_key = "d2344abac54832bb0a56f0564c18a9b1";
let difKelvin = 273.15;

document.getElementById("botonBusqueda").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudadEntrada").value;

  if (ciudad) {
    fetchDatosClima(ciudad);
  } else console.log("Debe ingresar algún dato.");
  
});

function fetchDatosClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then((data) => data.json())
    .then((data) => mostrarDatosClima(data));
}

function mostrarDatosClima(data){
    
    const divDatosClima = document.getElementById("datosClima");
    divDatosClima.innerHTML = "";

    const ciudadNombre = data.name;
    const temperatura = data.main.temp;
    const descripcion = data.weather[0].description;
    const pais = data.sys.country;
    const humedad = data.main.humidity;
    const icono =  data.weather[0].icon;    

    const ciudadTitulo = document.createElement("h2");
    ciudadTitulo.textContent = ciudadNombre + ", " + pais;

    const temperaturaInfo = document.createElement("p");
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - difKelvin)} °C`;

    const iconoInfo = document.createElement("img");
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`; 

    const descripcionInfo = document.createElement("p");
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`;

    const humedadInfo = document.createElement("p");
    humedadInfo.textContent = `La humedad es del: ${humedad}%`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(descripcionInfo);
    divDatosClima.appendChild(humedadInfo);
}