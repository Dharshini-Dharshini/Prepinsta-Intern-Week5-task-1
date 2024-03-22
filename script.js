const cityContainer = document.getElementById('city-container');

fetch('https://api.npoint.io/7bbd3a59c401f616bb89')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        data.cities.forEach(city => {
            const cityElement = document.createElement('div');
            cityElement.classList.add('city');

            const cityName = document.createElement('h2');
            cityName.textContent = city.name;

            const cityDetails = document.createElement('p');
            cityDetails.textContent = `Population: ${city.population}, State: ${city.state}`;

            cityElement.appendChild(cityName);
            cityElement.appendChild(cityDetails);

            cityContainer.appendChild(cityElement);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });