const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2022, 09, 13, 11, 30, 0);

const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = months[futureDate.getMonth()];
let weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `
giveaway ends on ${weekday}, 
${date} ${month} ${year}, ${hours}:${minutes}am
`
  ;

// future time in ms

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / oneSecond);

  // set values array;

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return item = `0${item}`
    }
    return item;
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `
    <h4 class="expired">sorry, this giveaway has expired</h4>
    `;
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();