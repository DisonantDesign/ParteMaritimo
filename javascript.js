
var urlActivacion = "https://opendata.aemet.es/opendata/api/observacion/convencional/datos/estacion/1210X/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb3NlbWFyaWFfMTk4NEBob3RtYWlsLmVzIiwianRpIjoiMzA3ODNiYjAtYTYyOC00NjczLTg1NmItNTU4ZTVkNDA0MmI2IiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE2MTg2NzgzNDAsInVzZXJJZCI6IjMwNzgzYmIwLWE2MjgtNDY3My04NTZiLTU1OGU1ZDQwNDJiNiIsInJvbGUiOiIifQ.x0vKmuTRHWXmmJJwCReHzz7XXJjJQk9oLKUXaOUuHIk";
fetch(urlActivacion)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);


var CantabricoActiva = 'https://opendata.aemet.es/opendata/api/prediccion/maritima/costera/costa/41/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb3NlbWFyaWFfMTk4NEBob3RtYWlsLmVzIiwianRpIjoiMzA3ODNiYjAtYTYyOC00NjczLTg1NmItNTU4ZTVkNDA0MmI2IiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE2MTg2NzgzNDAsInVzZXJJZCI6IjMwNzgzYmIwLWE2MjgtNDY3My04NTZiLTU1OGU1ZDQwNDJiNiIsInJvbGUiOiIifQ.x0vKmuTRHWXmmJJwCReHzz7XXJjJQk9oLKUXaOUuHIk';
fetch(CantabricoActiva)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);




//Funcion general que Dibuja datos de Dato Cabo peñas
var cabo = 'https://opendata.aemet.es/opendata/sh/5d70fbff?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb3NlbWFyaWFfMTk4NEBob3RtYWlsLmVzIiwianRpIjoiMzA3ODNiYjAtYTYyOC00NjczLTg1NmItNTU4ZTVkNDA0MmI2IiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE2MTg2NzgzNDAsInVzZXJJZCI6IjMwNzgzYmIwLWE2MjgtNDY3My04NTZiLTU1OGU1ZDQwNDJiNiIsInJvbGUiOiIifQ.x0vKmuTRHWXmmJJwCReHzz7XXJjJQk9oLKUXaOUuHIk';
fetch(cabo)
    .then(response => response.json())
    .then(data => {
        //console.log(data[3]);
        pintaHTML(data);

        //Crea Html con datos api
        function pintaHTML(data) {

            let plantillaCaboPe = `
          
            <b>ubicación:AEMET Cabo de Peñas</b></br>
            ultActualización:<b>${Date()}</b></br>
            altitud:<b>${data[3].alt}m </b></br>
            latitud:<b>${data[3].lat} </b></br>
            longitud:<b>${data[3].lon}</b> </br>
            tempAmbiente:<b>${data[3].ta}º</b></br>
            tempMax:<b>${data[3].tamax}º</b></br>
            tempMin:<b>${data[3].tamin}º</b></br> 
            precipitación:<b>${data[3].prec} l/m2 </b></br>          
            vMediaViento:<span id="MediaViento" class="viento"><b>  ${parseInt((data[3].vv)*3.6)} km/h</b></span></br>         
            RachaVientoMax:<span id="rachaViento" class="viento"><b>${parseInt((data[3].vmax)*3.6)} Km/h</b></span></br>
            DirecciónViento:<span id="divViento"><b>${data[3].dv}º ${flechasViento()}</b><span id="divWind"></span></span></br>
       
         `;
            //Funcion que dibuja las Flechas De Viento segun 360 grados

            function flechasViento() {
                let vientos = ['N ⬇', 'NE ⬋', 'E ⬅', 'SE ⬉', 'S ⬆', 'SO ⬈', 'O ⮕', 'NO ⬊'];

                let viento = data[3].dv;

                //direccion Viento Norte
                if (viento >= 0 && viento <= 9) {
                    wind = (vientos[0]);
                    console.log(viento);
                }
                //direccion Viento Norte-ESTE
                else if (viento >= 10 && viento <= 45) {
                    wind = (vientos[1]);
                }
                //VIENTO N-ESTE-E
                else if (viento >= 46 && viento <= 90) {
                    wind = (vientos[6]);
                }
                //Viento Sur-Este-E    
                else if (viento >= 91 && viento <= 135) {
                    wind = (vientos[3]);
                }
                //Viento Sur-Este-S   
                else if (viento >= 136 && viento <= 170) {
                    wind = (vientos[6]);
                }
                //Viento Sur 
                else if (viento >= 171 && viento <= 180) {
                    wind = (vientos[4]);
                }
                //Viento Sur-Suroeste
                else if (viento >= 181 && viento <= 225) {
                    wind = (vientos[5]);
                }
                //Viento SurOeste-Oeste
                else if (viento >= 226 && viento <= 270) {
                    wind = (vientos[5]);
                }
                //Viento Oeste-NorOeste
                else if (viento >= 271 && viento <= 315) {
                    wind = (vientos[7]);
                }
                //Viento NorOeste-Norte
                else if (viento >= 316 && viento <= 350) {
                    wind = (vientos[7]);
                }
                //Viento Norte
                else if (viento >= 351 && viento <= 360) {
                    wind = (vientos[7]);
                } else { console.log('Algo Fallo') }

                const divWind = document.getElementById('divWind');
                return divWind.innerHTML = wind;

            };
            //Funcion colores segun Viento
            function colorViento() {
                let windSpeed = parseInt((data[3].vv) * 3.6);
                let x;
                //console.log(windSpeed);
                divverde = document.getElementById('vMediaViento');
                if (windSpeed >= 0 || windSpeed >= 18) {

                    divverde.style.color = 'LightGreen';
                    divverde.innerHTML = `<b>Velocidad Viento: ${(data[3].vv)*3.6} km/h</b>`;

                } else if (windSpeed >= 18 || windSpeed >= 34) {

                    divverde.style.color = 'greeyellow';

                    divverde.innerHTML = `<b>Velocidad Viento: ${(data[3].vv)*3.6} km/h</b>`;
                } else if (windSpeed >= 35 || windSpeed >= 55) {

                    divverde.style.color = 'yellow';

                    divverde.innerHTML = `<b>Velocidad Viento: ${(data[3].vv)*3.6} km/h</b>`;
                } else {

                    divverde.style.color = 'red';

                    divverde.innerHTML = `<b>Velocidad Viento: ${(data[3].vv)*3.6} km/h</b>`;

                }



            }
            colorViento();


            return document.getElementById("parte").innerHTML = plantillaCaboPe;
        };

    })

.catch(error => error);


//Funcion que realiza fetch y dibuja los datos en pantalla
function addParteMar() {

    var marCantabrico = 'https://opendata.aemet.es/opendata/sh/a2ff5ac0?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb3NlbWFyaWFfMTk4NEBob3RtYWlsLmVzIiwianRpIjoiMzA3ODNiYjAtYTYyOC00NjczLTg1NmItNTU4ZTVkNDA0MmI2IiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE2MTg2NzgzNDAsInVzZXJJZCI6IjMwNzgzYmIwLWE2MjgtNDY3My04NTZiLTU1OGU1ZDQwNDJiNiIsInJvbGUiOiIifQ.x0vKmuTRHWXmmJJwCReHzz7XXJjJQk9oLKUXaOUuHIk';
    fetch(marCantabrico)
        .then(res => res.json())
        .then(datoMar => {

            let parteCantabrico = datoMar[0].prediccion.zona[0].subzona.texto;
            filtroparte = parteCantabrico.replace(/[�ñ´]+/gi, 'n');
            // console.log(datoMar[0]);
            let plantillaMar =
                `<div>
                    <h5>Parte Maritimo Cantabrico Asturiano</h5>
                    <p>${filtroparte} </p>
                </div>
             `;
            return document.getElementById("partemaritimo").innerHTML = plantillaMar;
        })
        .catch(error => error);
};
addParteMar();




//Funcion Prediccion Pesca

function prediccionPesca() {

    alert('en proceso.... en breves estara!');

};
