setInterval(() => {
    const date = new Date();
  
    let hours = document.getElementById("hours");
    hours.innerHTML = date.getHours();
    if (hours.innerHTML < 10) {
      hours.innerHTML = "0" + date.getHours();
    }
  
    let minutes = document.getElementById("minutes");
    minutes.innerHTML = date.getMinutes();
    if (minutes.innerHTML < 10) {
      minutes.innerHTML = "0" + date.getMinutes();
    }
  
    let seconds = document.getElementById("seconds");
    seconds.innerHTML = date.getSeconds();
    if (seconds.innerHTML < 10) {
      seconds.innerHTML = "0" + date.getSeconds();
    }
  }, 1000);
  