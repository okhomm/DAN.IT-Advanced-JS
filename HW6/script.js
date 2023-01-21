const CLIENT_IP_API = 'https://api.ipify.org/?format=json';
const IP_API = 'http://ip-api.com/json/';
const IP_API_OPTIONS = '?fields=message,continent,country,regionName,city,district';

const getIPbutton = document.querySelector('#get-ip');
const locationInfoBlock = document.querySelector('.location-info');


const getUserIP = async () => {
  try {
    const response = await fetch(CLIENT_IP_API);
    const data = await response.json();
    const { ip } = data;
    return (`${IP_API}${ip}${IP_API_OPTIONS}`);
  }
  catch (error) {
    console.error(error);
  }
}

const getUserLocation = async () => {
  try {
    const response = await getUserIP();
    const data = await fetch(response);
    const location = await data.json();
    return location;
  }
  catch (error) {
    console.error(error);
  }
}

const htmlRenderLocation = async () => {
  try {
    const response = await getUserLocation();
    const { continent, country, regionName, city, district } = response;
    document.querySelector('.wrapper').append(locationInfoBlock);
    locationInfoBlock.innerHTML = `
  <p class="pt-3">Континент: <strong>${continent}</strong></p>
  <p>Країна: <strong>${country}</strong></p>
  <p>Регіон: <strong>${regionName}</strong></p>
  <p>Місто: <strong>${city}</strong></p>
  `;
    if (district != '') {
      locationInfoBlock.innerHTML += `<p>Район: <strong>${district}</strong></p>`;
    }
  }
  catch (error) {
    console.error(error);
  }
}

getIPbutton.addEventListener('click', htmlRenderLocation);