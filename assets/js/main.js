function successGeolocation(pos) {
    var userLang = navigator.language;
    var crd = pos.coords;

    var x = crd.latitude;
    var y = crd.longitude;

    // console.log(x);
    // console.log(y);
    // console.log(userLang.substring(0, 2));

    //Получаем прогноз в массив data
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + y + "&lon=" + x + "&lang=" + userLang.substring(0, 2) + "&appid=d1c4e502a34a19109ad8444d92e4cd61")
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {

            //Название города
            document.querySelector(".weather__city").textContent = data.name;

            //Координаты
            document.querySelector(".weather__city").textContent = "x: " + x + " - y: " + y;

            //Вермя(?)
            //document.querySelector(".weather__time__time").textContent = data.time;

            //Темп. значение в Кельвинах (отнимаем 273, чтобы получить значение в Цельсия)
            document.querySelector(".weather__temp").innerHTML = Math.round(data.main.temp - 273) + "&deg;";

            //"Чувствуеться как...", мин/макс температура
            document.querySelector(".weather__feels__like").innerHTML = Math.round(data.main.feels_like - 273) + "&deg;";
            //document.querySelector(".weather__min").innerHTML = Math.round(data.main.temp_min - 273) + "&deg;";
            //document.querySelector(".weather__max").innerHTML = Math.round(data.main.temp_max - 273) + "&deg;";

            //Ветер
            document.querySelector(".weather__wind__speed").textContent = "Ветер: " + data.wind.speed + " км/ч";
            document.querySelector(".weather__wind__deg").innerHTML = Math.round(data.wind.deg - 273) + "&deg;";
            document.querySelector(".weather__wind__gust").textContent = data.wind.gust;

            //Влажность
            document.querySelector(".weather__humidity").textContent = "Влажность: " + data.main.humidity + "%";

            //Описание погоды
            document.querySelector(".weather__desc").textContent = data.weather[0]["description"];

            //Добавляем иконку погоды

            switch (data.weather[0]['icon']) {
                case '01d':
                    document.querySelector('.weather__icon').innerHTML = `<img src="" alt="${data.weather[0]['icon']}">`;
                    break;
                case '02d':
                    document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="${data.weather[0]['icon']}">`;
                    break;
                case '03d':
                    document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="${data.weather[0]['icon']}">`;
                    break;
                case '04d':
                    document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="${data.weather[0]['icon']}">`;
                    break;
                case '09d':
                    document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="${data.weather[0]['icon']}">`;
                    break;
                case '10d':
                    document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="${data.weather[0]['icon']}">`;
                    break;
                case '11d':
                    document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="${data.weather[0]['icon']}">`;
                    break;
                case '13d':
                    document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="${data.weather[0]['icon']}">`;
                    break;
                case '50d':
                    document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="${data.weather[0]['icon']}">`;
                    break;
                default:
                    document.querySelector('.weather__icon').innerHTML = `<span>bruh</span>`;
            }
        })
        .catch(function () {
            //Обрабатываем ошибки
            console.log('Ошибка');
        });
}

navigator.geolocation.getCurrentPosition(successGeolocation);
