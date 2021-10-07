let toggle = false;
startBtn = document.getElementById("startBtn");
startBtn.addEventListener('click', function() {
  console.log("click");
  if (toggle === false) {
    this.innerText = "stop";
    console.log("you clicked start");
    toggle = true;
  } else {
    this.innerText = "start";
    console.log("you clicked stop");
    toggle = false;
  }
});