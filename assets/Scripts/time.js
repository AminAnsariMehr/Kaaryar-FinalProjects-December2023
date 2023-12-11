const hourIcon = document.querySelector(".weatherSection__tempratureIcon");
const timeIndicator = document.querySelector(".timeSection__timeIndicator");
const solarDay = document.querySelector(".solarCalendar__solarDay");
const solarMonth = document.querySelector(".solarCalendar__solarMonth");
const lunarYear = document.querySelector(".lunarCalendar__year");
const lunarMonth = document.querySelector(".lunarCalendar__month");
const lunarDay = document.querySelector(".lunarCalendar__day");
const gregorianYear = document.querySelector(".gregorianCalendar__year");
const gregorianMonth = document.querySelector(".gregorianCalendar__month");
const gregorianDay = document.querySelector(".gregorianCalendar__day");

const timeAPI = "https://kaaryar0506reactblog.liara.run/current/time";

// get time and display in DOM
const showClock = () => {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();

  minutes = minutes < 10 ? "0" + minutes : minutes;
  hours = hours < 10 ? "0" + hours : hours;
  timeIndicator.innerHTML = `${hours}:${minutes}`;
};

// get datas all calenders
const getDataCalenders = async () => {
  const res = await fetch(timeAPI);
  const data = await res.json();
  solarDay.innerHTML = data.shamsi.dayInMonth;
  solarMonth.innerHTML = data.shamsi.month;
  lunarYear.innerHTML = data.islamicHijri.year.substr(0, 4);
  lunarMonth.innerHTML = data.islamicHijri.month;
  lunarDay.innerHTML = data.islamicHijri.dayInMonth;
  gregorianYear.innerHTML = data.miladi.year;
  gregorianMonth.innerHTML = data.miladi.month.substr(0, 3);
  gregorianDay.innerHTML = data.miladi.dayInMonth;
};

// change night and day icon
const changeIcon = () => {
  let hours = new Date().getHours();
  hours >= 5 && hours < 18
    ? (hourIcon.src = "./assets/Images/Weather/sun.png")
    : (hourIcon.src = "./assets/Images/Weather/moon.png");
};

setInterval(showClock, 1000);
setInterval(changeIcon, 1000);
showClock();
changeIcon();
getDataCalenders();
