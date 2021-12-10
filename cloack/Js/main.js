
setInterval(() => {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let amPm = "";
  
    // Checking for AM/PM
    if (hours > 12) {
      hours = hours - 12;
      amPm = "PM";
    } else if (hours == 0) {
      hours = 12;
      amPm = "AM";
    } else {
      amPm = "AM";
    }

    hours = hours > 10 ? hours : "0" + hours;
    minutes = minutes > 10 ? minutes : "0" + minutes;
    seconds = seconds > 10 ? seconds : "0" + seconds;
    document.getElementById(
      "digital-clock"
    ).innerHTML = `${hours}:${minutes}:${seconds} ${amPm}`;
  }, 1000);