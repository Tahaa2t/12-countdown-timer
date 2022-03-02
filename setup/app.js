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


const deadline = document.querySelector(".deadline");
const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");
// console.log(items);
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();


let futureDate = new Date(tempYear,tempMonth,tempDay + 10,23,59,59);
// console.log(futureDate);

const year = futureDate.getFullYear();
const month = futureDate.getMonth();
const date = futureDate.getDate();
const day = futureDate.getDay();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const secs = futureDate.getSeconds();

if(hours>12){
  giveaway.textContent = `giveaway ends on ${weekdays[day-1]}, ${date} ${months[month-1]} ${year} ${hours-12}:${mins}pm `;
}
else{
  giveaway.textContent = `giveaway ends on ${weekdays[day-1]}, ${date} ${months[month-1]} ${year} ${hours}:${mins}am `;
}

const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime(){
  const today = new Date().getTime();
  // console.log(today);
  let t = futureTime - today;
  console.log(t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in ms
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMin = 60*1000;
  const oneSec = 1000;

  let days = t/(oneDay);
  days = Math.floor(days);
  t = t % oneDay;
  // console.log(days);
  // console.log(t);

  let hours = t/(oneHour);
  hours = Math.floor(hours);
  t = t % oneHour;
  // console.log(hours);
  // console.log(t);

  let minutes = t/(oneMin);
  minutes = Math.floor(minutes);
  t = t % oneMin;
  // console.log(minutes);
  // console.log(t);

  let seconds = t/(oneSec);
  seconds = Math.floor(seconds);
  t = t % oneSec;
  // console.log(seconds);
  // console.log(t);

  // set values array
  const values = [days,hours,minutes,seconds];

  function format(item){
    if(item < 10){
      return `0${item}`;
    }
    else{
      return item;
    }
  }

  items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
  }); 
  if(t<0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has been expired<h4>`;
  }

}
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()