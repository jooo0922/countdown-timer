'use strict';

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '1 Jan 2022' 

function countdown(){
  // new Date()
  // new Date(value)
  // new Date(dateString)
  // new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])
  // 원하는 dateString을 parameter로 전달하면 그 날짜까지의 경과시간을 return해줄 수 있음.
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 60 / 60 / 24);
  const hours = Math.floor(totalSeconds / 60 / 60) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  // console.log(days, hours, minutes, seconds);

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
  return time < 10 ? (`0${time}`) : time;
}

// initial call
countdown();

setInterval(countdown, 1000);

