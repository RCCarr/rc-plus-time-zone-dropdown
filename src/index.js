function showSelectedCity(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "paris") {
      alert(`It is ${parisCurrentDate} in Europe/Paris`);
    }
    if (event.target.value === "tokyo") {
      alert(`It is ${tokyoCurrentDate} in Asia/Tokyo`);
    }
    if (event.target.value === "sydney") {
      alert(`It is ${sydneyCurrentDate} in Australia/Sydney`);
    }
  }
}

let parisDateElement = document.querySelector("#paris");
let parisCurrentDate = moment()
  .tz("Europe/Paris")
  .format("dddd, MMMM D, YYYY h:mm A");

let tokyoDateElement = document.querySelector("#tokyo");
let tokyoCurrentDate = moment()
  .tz("Asia/Tokyo")
  .format("dddd, MMMM D, YYYY h:mm A");

let sydneyDateElement = document.querySelector("#sydney");
let sydneyCurrentDate = moment()
  .tz("Australia/Sydney")
  .format("dddd, MMMM D, YYYY h:mm A");

let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", showSelectedCity);
