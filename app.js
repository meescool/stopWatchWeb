let toggle = false;
let sec = 0;
let min = 0;
let hr = 0;

let timer;

let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");
let hours = document.getElementById("hours");
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener('click', function() {
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

// this function starts setInterval function.
function startTimer(toggle) {

  if (toggle === false) {
    console.log("bug2");
    clearInterval(timer);
    console.log(timer);
  } else {
    timer = setInterval(updateTime, 1000);

  }

}


function updateTime() {
  sec += 1;
  if (sec === 60 && hr !== 100) {
    sec = 0;
    seconds.innerText = '00';
    min += 1;
    if (min === 60 && hr !== 100) {
      min = 0;
      minutes.innerText = '00';
      hr += 100;
      if (hr < 10) {
        hours.innerText = '0' + hr;
      } else
        hours.innerText = hr;

    } else if (min < 10)
      minutes.innerText = '0' + min;
    else
      minutes.innerText = min;
  } else if (hr === 100) {
    stopTimer();
    document.querySelector(".time").style.color = 'red';


  } else if (sec < 10)
    seconds.innerText = '0' + sec;
  else
    seconds.innerText = sec;

}

function stopTimer() {
  toggle = false;
  startTimer(toggle);
}