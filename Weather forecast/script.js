import { API_KEY } from "./config.js";
const zip = document.getElementById("zipcode");
const country = document.getElementById("countrycode");

document.getElementById('button').addEventListener('click', () => {
    const myPromise1 = new Promise((res, rej) => {
        fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zip.value},${country.value}&appid=${API_KEY}`)
            .then(response => response.json())
            .then((data) => {
                const lat = data.lat;
                const lon = data.lon;
                res({ lat, lon });
            })
            .catch(error => rej(error));
    });
    
    myPromise1.then(({ lat, lon }) => {
        const myPromise2 = new Promise((res, rej) => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
                .then(response => response.json())
                .then((data) => {
                    res(data);
                })
                .catch(error => rej(error));
        });
        
        myPromise2.then((res) => {
            document.getElementById('result').innerText = `Temperature : ${res.main.temp} | Humidity : ${res.main.humidity} | Area : ${res.name}`;
        }).catch(error => console.log(error)); // Catch errors from myPromise2
    }).catch(error => console.log(error)); // Catch errors from myPromise1
});

document.getElementById('reset').addEventListener(('click'), () => {
    document.getElementById('zipcode').value = '';
    document.getElementById('countrycode').value = '';
    document.getElementById('result').innerText = '';
})
