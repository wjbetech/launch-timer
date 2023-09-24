const countDown = () => {

    // make sure to hardcore or use a node package to generate
    // a random future date!!
    const endDate = new Date("Sep 29, 2023 18:38:30").getTime();
    const now = new Date().getTime();
    const diff = endDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor(diff / days);
    let timeHours = Math.floor((diff % days) / hours);
    let timeMinutes = Math.floor((diff % hours) / minutes);
    let timeSeconds = Math.floor((diff % minutes) / seconds);

    timeHours = timeDays < 10 ? "0" + timeHours : timeHours;
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

    document.getElementById("days").innerHTML = timeDays;
    document.getElementById("hours").innerText = timeHours;
    document.getElementById("minutes").innerText = timeMinutes;
    document.getElementById("seconds").innerText = timeSeconds;
}

setInterval(countDown, 1000);
