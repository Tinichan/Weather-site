const APP_ID = "d1c4e502a34a19109ad8444d92e4cd61";
const UNITS = "metric";

const images = {
    '01d': 'assets/images/icons/clear_sky.svg',
    '01n': 'assets/images/icons/clear_sky(dark).svg',
    '02d': 'assets/images/icons/few_clouds.svg',
    '02n': 'assets/images/icons/few_clouds(dark).svg',
    '03d': 'assets/images/icons/scattered_clouds.svg',
    '03n': 'assets/images/icons/scattered_clouds(dark).svg',
    '04n': 'assets/images/icons/broken_clouds.svg',
    '04d': 'assets/images/icons/broken_clouds.svg',
    '09d': 'assets/images/icons/shower_rain.svg',
    '09n': 'assets/images/icons/shower_rain(dark).svg',
    '10d': 'assets/images/icons/rain.svg',
    '10n': 'assets/images/icons/rain(dark).svg',
    '11d': 'assets/images/icons/thunderstorm.svg',
    '11n': 'assets/images/icons/thunderstorm.svg',
    '13d': 'https://openweathermap.org/img/wn/13d@2x.png',
    '13n': 'https://openweathermap.org/img/wn/13n@2x.png',
    '50d': 'https://openweathermap.org/img/wn/50d@2x.png',
    '50n': 'https://openweathermap.org/img/wn/50n@2x.png'
};
const unknownImage = '<span>❓</span>';

function successGeolocation(pos) {
    console.log(pos)

    const { latitude } = pos.coords;
    const { longitude } = pos.coords;

    // console.log(x);
    // console.log(y);
    // console.log(userLang.substring(0, 2));

    //Получаем прогноз в массив data

    // fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + y + "&lon=" + x + "&lang=" + userLang.substring(0, 2) + "&appid=d1c4e502a34a19109ad8444d92e4cd61")
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=en&appid=${APP_ID}&units=${UNITS}`)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            console.log(data);

            //Название города
            if (data.name) {
                document.querySelector(".weather__city").textContent = data.name;
            } else {
                document.querySelector(".weather__city").textContent = "City not found 🤷‍♂";
            }
            //Координаты
            document.querySelector(".weather__crd").textContent = "X: " + latitude + " - Y: " + longitude;

            //Вермя(?)
            //document.querySelector(".weather__time__time").textContent = data.time;

            //Темп. значение в Кельвинах (отнимаем 273, чтобы получить значение в Цельсия)
            document.querySelector(".weather__temp").innerHTML =  `${Math.round(data.main.temp)}&deg;`;

            //Описание погоды
            document.querySelector(".weather__desc").textContent = data.weather[0]["description"];

            //"Чувствуеться как...", мин/макс температура
            document.querySelector(".weather__feels__like").innerHTML = `Feels like: ${Math.round(data.main.feels_like)}&deg;`;
            //document.querySelector(".weather__min").innerHTML = Math.round(data.main.temp_min - 273) + "&deg;";
            //document.querySelector(".weather__max").innerHTML = Math.round(data.main.temp_max - 273) + "&deg;";

            //Ветер
            // document.querySelector(".weather__wind__speed").textContent = "Wind: " + data.wind.speed + " км/ч";
            // document.querySelector(".weather__wind__deg").innerHTML = Math.round(data.wind.deg - 273) + "&deg;";
            // document.querySelector(".weather__wind__gust").textContent = data.wind.gust;
            //
            //Влажность
            // document.querySelector(".weather__humidity").textContent = "Humidity: " + data.main.humidity + "%";


            //Добавляем иконку погоды
            // document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="${data.weather[0]['icon']}">`;
            const iconId = data.weather[0]['icon'];

            if (images.hasOwnProperty(iconId)) {
                document.querySelector('.weather__icon').innerHTML = `<img src="${images[iconId]}" alt="${images[iconId]}">`
            }
            else {
                document.querySelector('.weather__icon').innerHTML = unknownImage;
            }
            // document.querySelector('.weather__icon')
            // switch (data.weather[0]['icon']) {
            //     case '01d':
            //         document.querySelector('.weather__icon').innerHTML = `<img src="assets/images/icons/clear_sky.svg" alt="${data.weather[0]['icon']}">`;
            //         break;
            //     case '01n':
            //         document.querySelector('.weather__icon').innerHTML = `<img src="assets/images/icons/clear_sky(dark).svg" alt="${data.weather[0]['icon']}">`;
            //         break;


            //     case '02d':
            //         document.querySelector('.weather__icon').innerHTML = `<img src="assets/images/icons/few_clouds.svg" alt="${data.weather[0]['icon']}">`;
            //         break;
            //     case '02n':
            //         document.querySelector('.weather__icon').innerHTML = `<img src="assets/images/icons/few_clouds(dark).svg" alt="${data.weather[0]['icon']}">`;
            //         break;


            //     case '03d':
            //         document.querySelector('.weather__icon').innerHTML = `<img src="assets/images/icons/scattered_clouds.svg" alt="${data.weather[0]['icon']}">`;
            //         break;
            //     case '03n':
            //         document.querySelector('.weather__icon').innerHTML = `<img src="assets/images/icons/scattered_clouds(dark).svg" alt="${data.weather[0]['icon']}">`;
            //         break;


            //     case '04n':
            //         document.querySelector('.weather__icon').innerHTML = `<img src="assets/images/icons/broken_clouds.svg" alt="${data.weather[0]['icon']}">`;
            //         break;
            //     case '04d':
            //         document.querySelector('.weather__icon').innerHTML = `<img src="assets/images/icons/broken_clouds.svg" alt="${data.weather[0]['icon']}">`;
            //         break;


            //     case '09d':
            //         document.querySelector('.weather__icon').innerHTML = `<img src="assets/images/icons/shower_rain.svg" alt="${data.weather[0]['icon']}">`;
            //         break;
            //     case '09n':
            //         document.querySelector('.weather__icon').innerHTML = `<img src="assets/images/icons/shower_rain(dark).svg" alt="${data.weather[0]['icon']}">`;
            //         break;


            //     case '10d':
            //         document.querySelector('.weather__icon').innerHTML = `<img src="assets/images/icons/rain.svg" alt="${data.weather[0]['icon']}">`;
            //         break;
            //     case '10n':
            //         document.querySelector('.weather__icon').innerHTML = `<img src="assets/images/icons/rain(dark).svg" alt="${data.weather[0]['icon']}">`;
            //         break;


            //     case '11d':
            //         document.querySelector('.weather__icon').innerHTML = `<img src="assets/images/icons/thunderstorm.svg" alt="${data.weather[0]['icon']}">`;
            //         break;
            //     case '11n':
            //         document.querySelector('.weather__icon').innerHTML = `<img src="assets/images/icons/thunderstorm.svg" alt="${data.weather[0]['icon']}">`;
            //         break;


            //     case '13d':
            //         document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="${data.weather[0]['icon']}">`;
            //         break;
            //     case '13n':
            //         document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="${data.weather[0]['icon']}">`;
            //         break;


            //     case '50d':
            //         document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="${data.weather[0]['icon']}">`;
            //         break;
            //     case '50n':
            //         document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="${data.weather[0]['icon']}">`;
            //         break;


            //     default:
            //         document.querySelector('.weather__icon').innerHTML = `<span>❓</span>`;
            //         console.log("'" + data.weather[0]['icon'] + "'");
            // }
        })
        .catch(function (error) {
            //Обрабатываем ошибки
            console.log(error);
        });
}

navigator.geolocation.getCurrentPosition(successGeolocation);
