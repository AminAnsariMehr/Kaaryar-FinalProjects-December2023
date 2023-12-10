const tempDegree = document.querySelector("#tempValue");
const tempIcon = document.querySelector(".weatherSection__tempratureIcon");
const tempText = document.querySelector(".weatherSection__tempratureText");
const tempTextIcon = document.querySelector(
  ".weatherSection__tempratureTextIcon"
);
const tempMax = document.querySelector("#tempMax");
const tempMin = document.querySelector("#tempMin");

const weatherAPI =
  "https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403&lang=fa&theme=light";

const getDataWeather = async () => {
  const res = await fetch(weatherAPI);
  const data = await res.json();

  tempDegree.innerHTML = Math.round(data[0].current);
  tempText.innerHTML = data[0].customDescription.text;
  tempTextIcon.innerHTML = data[0].customDescription.emoji;
  tempMax.innerHTML = Math.round(data[0].max);
  tempMin.innerHTML = Math.round(data[0].min);
};

getDataWeather();
