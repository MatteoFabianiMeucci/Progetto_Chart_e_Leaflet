const btn = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const coords = [43.110279747527905, 12.386842456916755];
const ctx = document.querySelector("#myChart");
const contenitore = document.querySelector("#contenitore");

let map = L.map('map').setView(coords, 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



btn.addEventListener('click',function() {
    for (let negozio of negozi) {
        const city = negozio.city;
        const latlongs = [negozio.latitude, negozio.longitude];
        const address = negozio.address;
        let marker = L.marker(latlongs).addTo(map);
        marker.bindPopup(`<p>Citta': ${city}</p><p>Indirizzo': ${address}</p>`);
    }
});

btn2.addEventListener('click', () => {
    const config = {
        type: 'bar',
        data: {
        labels: modelli,
        datasets: [{
            label: 'prezzi dispositivi in euro',
            data: prezzi,
            borderWidth: 1
        }]
        },
        options: {
            Plugin: {
                title: {
                    display: true,
                    text: 'Prodotti di elettronica'
                }
            }
        }
    }
    new Chart(ctx, config);
    contenitore.classList.add("border");
    contenitore.classList.add("border-black");
})

