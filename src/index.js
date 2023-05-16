setInterval(function () {
  //dublin

  let dublinElement = document.querySelector("#dublin");
  let dublinDateElement = dublinElement.querySelector(".date");
  let dublinTimeElement = dublinElement.querySelector(".time");
  let dublinTime = moment().tz("Europe/Dublin");

  dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
  dublinTimeElement.innerHTML = dublinTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

setInterval(function () {
  //paris

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);

setInterval(function () {
  //fiji

  let fijiElement = document.querySelector("#fiji");
  let fijiDateElement = fijiElement.querySelector(".date");
  let fijiTimeElement = fijiElement.querySelector(".time");
  let fijiTime = moment().tz("Pacific/Fiji");

  fijiDateElement.innerHTML = fijiTime.format("MMMM Do YYYY");
  fijiTimeElement.innerHTML = fijiTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);
