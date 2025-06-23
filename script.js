let startTime =0;
let elaspedTime = 0;
let timeInterval;

function timeToString(time){
    let hrs = Math.floor(time / 3600_000); // convert ms to hours
    let min = Math.floor((time % 3600_000) / 60000);
    let sec = Math.floor((time % 60000) /1000);

    return (
      (hrs < 10 ? "0" + hrs : hrs) + ":" + 
      (min < 10 ? "0" + min  : min) + ":" + 
      (sec < 10 ? "0" + sec : sec)
    )
}

function print(text) {
  document.getElementById("display").innerHTML = text;
}

function startStopWatch() {
  startTime = Date.now() - elaspedTime;
  timeInterval = setInterval(() => {
    elaspedTime = Date.now() - startTime;
    print(timeToString(elaspedTime))
  }, 1000)

}

function pauseStopWatch() {
  clearInterval(timeInterval);

}

function resetStopWatch() {
  clearInterval(timeInterval);
  print("00:00:00");
  elaspedTime =0;
  document.getElementById("laps").innerHTML = ""
}

function lapStopWatch() {
  const lapTime = timeToString(elaspedTime);
  const li = document.createElement('li');
  li.textContent = `Lap${lapTime}`
  document.getElementById("laps").appendChild(li);
}