$(document).ready(function() {

  function displayTime(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridiem = "AM";
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var weekDay = weekDays[currentTime.getDay()]; // index 0
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var month = months[currentTime.getMonth()]; // index 0
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();

    // Time
    if (hours >= 12 && minutes > 0 && seconds > 0) {
      hours = hours - 12;
      meridiem = "PM";
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (hours === 0) {
      hours = 12;
    }

  var dayDiv = document.getElementById('weekday');
  dayDiv.innerText = weekDay;

  var dateDiv = document.getElementById('date');
  dateDiv.innerText = month + " " + day + ", " + year

  var clockDiv = document.getElementById('clock');
  clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
  // clockDiv.innerText = hours + ":" + minutes + " " + meridiem;

  }

  function alarm() {
    var alarm = "2:13 PM"
    var time = document.getElementById('clock').innerText;
    if (time == alarm) {
    document.body.style.backGroundColor = "red";
    }
  }

  setInterval(displayTime, 1000);

});
