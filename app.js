/**
 * @author Marcela Estrada
 * @date 10/2021
 * this code is the functionality for the stopwatch. It is set in hours, minutes
 * and seconds. It has start, stop and reset functionality and also a limit
 * to 99 hours, 59 minutes and 59 seconds.
 *
 **/
let toggle = false;
let colorToggle = false;
let sec = 0;
let min = 0;
let hr = 0;

let timer;

// storing html elements in variables
let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");
let hours = document.getElementById("hours");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const time = document.querySelector(".time");

/**
 * event listener for the start and stop button
 **/
startBtn.addEventListener('click', function() {
  resetBtn.disabled = false;
  // if the user clicked the start button, then switch to stop button
  // sets the toggle to true and starts the timer.
  if (toggle === false) {
    this.innerText = "stop";
    toggle = true;
    startBtn.classList.remove("start");
    startBtn.classList.add("stop");
    startTimer();
  }
  // if the user clicked the stop button, then switch to start button
  // sets the toggle to false and stops the timer.
  else {
    this.innerText = "start";
    toggle = false;
    startBtn.classList.remove("stop");
    startBtn.classList.add("start");
    stopTimer();
  }
});

/**
 * event listener for the reset button
 * sets time back to 00:00:00 and disables the reset button
 **/
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
  toggle = false;
  startBtn.classList.remove("stop");
  startBtn.classList.add("start");
  stopTimer();
});

/**
 * Starts the stopwatch functionality by creating a setInterval function
 * the setInterval is stored in the timer object and calls updateTime, while
 * setting it to an interval of 1000 milliseconds which equals to 1 second
 * intervals
 * @return {void} Nothing
 **/
function startTimer() {
  timer = setInterval(updateTime, 1000);
}

/**
 * adds a second to the time on the stopwatch, checks the sec, min and hr
 * variables to determine when to add to minutes or seconds.
 * Updates the html to reflect the time.
 * @return {void} Nothing
 **/
function updateTime() {
  sec += 1;
  if (sec === 60 & min === 59 & hr === 99) {
    // makes sure that the timer doesn't go over
    stopTimer();
    startBtn.disabled = true;
    colorToggle = true;
    toggleColor(colorToggle);
  } else if (sec === 60 && hr !== 100) { // adds a minute if 60 sec have passed
    sec = 0;
    seconds.innerText = '00';
    min += 1;
    if (min === 60 && hr !== 100) { // adds an hour if 60 min have passed
      min = 0;
      minutes.innerText = '00';
      hr += 1;
      if (hr < 10) { // checks if single digits to add the 0 before
        hours.innerText = '0' + hr;
      } else
        hours.innerText = hr;

    } else if (min < 10) // checks if single digits to add the 0 before
      minutes.innerText = '0' + min;
    else
      minutes.innerText = min;


  } else if (sec < 10) // checks if single digits to add the 0 before
    seconds.innerText = '0' + sec;
  else
    seconds.innerText = sec;

}

/**
 * adds or removes the color of the time text
 * @params {boolean} c - indicates whether or not time is at 99:59:59
 **/
function toggleColor(c) {
  if (c === true)
    time.classList.add("overTime");
  else
    time.classList.remove("overTime");
}

/**
 * stops the timer by clearing the Interval function, sets the toggle to false
 * to indicate that stop buttons was selected
 * @return {void} Nothing
 **/
function stopTimer() {
  toggle = false;
  clearInterval(timer);
}