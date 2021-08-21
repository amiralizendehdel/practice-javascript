window.onload = function () {
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  var miliSeconds = 0;

  var hoursElement = document.getElementById("hours");
  var minutesElement = document.getElementById("minutes");
  var miliElement = document.getElementById("miliseconds");
  var secondsElement = document.getElementById("seconds");

  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");

  var Interval; // undefined

  buttonStart.onclick = function () {
    // this line is neccessary for not having more that one interval for timer
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);
    miliSeconds = "00";
    seconds = "00";
    minutes = "00";
    hours = "00";
    miliElement.innerHTML = miliSeconds;
    secondsElement.innerHTML = seconds;
    minutesElement.innerHTML = minutes;
    hoursElement.innerHTML = hours;
  };

  function startTimer() {
    countMiliSeconds();
    countSeconds();
    countMinutes();
    countHours();
  }

  function countMiliSeconds() {
    showTime(miliSeconds, miliElement);
    if (miliSeconds > 99) {
      miliSeconds = 0;
      miliElement.innerHTML = "00";
    }
    miliSeconds++;
  }

  function countSeconds(params) {
    showTime(seconds, secondsElement);
    if (seconds > 59) {
      seconds = 0;
      secondsElement.innerHTML = "00";
    }

    if (miliSeconds > 99) {
      seconds++;
    }
  }

  function countMinutes() {
    showTime(minutes, minutesElement);
    if (minutes > 59) {
      minutes = 0;
      minutesElement.innerHTML = "00";
    }

    if (seconds > 59) {
      minutes++;
    }
  }

  function countHours() {
    showTime(hours, hoursElement);
    if (minutes > 59) {
      hours++;
    }
  }

  function showTime(number, element) {
    if (number <= 9) {
      element.innerHTML = "0" + number;
    }

    if (number > 9) {
      element.innerHTML = number;
    }
  }
};
