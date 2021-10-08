let toggle = false;
let colorToggle = false;
let sec = 0;
let min = 0;
let hr = 98;

let timer;

let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");
let hours = document.getElementById("hours");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const time = document.querySelector(".time");


startBtn.addEventListener('click', function() {
  resetBtn.disabled = false;
  console.log("click");
  if (toggle === false) {
    this.innerText = "stop";
    console.log("you clicked start");
    toggle = true;
    startBtn.classList.remove("start");
    startBtn.classList.add("stop");
    startTimer(toggle);
  } else {
    this.innerText = "start";
    startBtn.classList.remove("stop");
    console.log("you clicked stop");
    toggle = false;
    startBtn.classList.add("start");
    console.log(startBtn.classList);
    stopTimer();
  }
});

resetBtn.addEventListener('click', function() {
  sec = 0;
  min = 0;
  hr = 0;

  seconds.innerText = '0' + sec;
  minutes.innerText = '0' + min;
  hours.innerText = '0' + hr;

  resetBtn.disabled = true;

  colorToggle = false;
  toggleColor(colorToggle);

  startBtn.disabled = false;
  startBtn.innerText = "start";
  startBtn.classList.remove("stop");
  console.log("you clicked stop");
  toggle = false;
  startBtn.classList.add("start");
  console.log(startBtn.classList);
  stopTimer();
});

// this function starts setInterval function.
function startTimer(toggle) {

  if (toggle === false) {
    console.log("bug2");
    clearInterval(timer);
    console.log(timer);
  } else {
    timer = setInterval(updateTime, 1);

  }

}


function updateTime() {
  sec += 1;
  if (sec === 60 & min === 59 & hr === 99) {
    stopTimer();
    startBtn.disabled = true;
    colorToggle = true;
    toggleColor(colorToggle);
  } else if (sec === 60 && hr !== 100) {
    sec = 0;
    seconds.innerText = '00';
    min += 1;
    if (min === 60 && hr !== 100) {
      min = 0;
      minutes.innerText = '00';
      hr += 1;
      if (hr < 10) {
        hours.innerText = '0' + hr;
      } else
        hours.innerText = hr;

    } else if (min < 10)
      minutes.innerText = '0' + min;
    else
      minutes.innerText = min;


  } else if (sec < 10)
    seconds.innerText = '0' + sec;
  else
    seconds.innerText = sec;

}

function toggleColor(c) {
  if (c === true)
    time.classList.add("overTime");
  else
    time.classList.remove("overTime");
}

function stopTimer() {
  toggle = false;
  startTimer(toggle);
}