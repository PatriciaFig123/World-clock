function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone.length > 0) {
    let cityTime = moment().tz(cityTimeZone);
    let formattedTime = cityTime.format("dddd, MMMM D, YYYY h:mm A");
    alert(`It is ${formattedTime} in ${cityTimeZone}`);
  }
}

let citySelect = document.querySelector("#city-selector");
citySelect.addEventListener("change", updateCity);
