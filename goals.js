const currentTimeElement = document.getElementById('current-time-utc');
const currentDayElement = document.getElementById('current-day-of-the-week');

function updateCurrentDayTime(){
    const today = new Date();
    const utcTime = today.toUTCString();
    const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    currentTimeElement.textContent=utcTime;
    currentDayElement.textContent = dayList;
}


updateCurrentDayTime();
setInterval(updateCurrentDayTime, 1000);
