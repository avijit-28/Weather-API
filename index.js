document.getElementById('getApi').addEventListener('click',callAPI);

const apikey ='b4863658fd4243a787e161400232501';

function callAPI(){
    var cityName = document.getElementById('cityName').value;
    const apiUrl = 'http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cityName}&aqi=no';

    alert("city is "+cityName);
    alert(apiUrl);
}


