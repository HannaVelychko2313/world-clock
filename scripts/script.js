const city = document.getElementById("city");
const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");
let intervalId;

function updateCity(e) {
  if (intervalId) {
    clearInterval(intervalId);
  }
  let timeZone = e.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  document.querySelector(".city-name").innerHTML =
    `${timeZone.split("/").pop().split("_").join(" ")}`;

  function updateTime() {
    const localTime = moment().tz(timeZone);
    dateElement.innerHTML = `${localTime.format("dddd, MMMM Do YYYY")}`;
    timeElement.innerHTML = `<span>${localTime.format("h:mm:ss")}</span>
        <small>${localTime.format("A")}</small>`;
  }
  updateTime();
  intervalId = setInterval(updateTime, 1000);
}

city.addEventListener("change", updateCity);
