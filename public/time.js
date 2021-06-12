///TIME MANAGEMENT TOOLS - Stopwatch & Flow Time Tracker

//Variables for HTML elements using DOM selection:
//stopwatch----
const startCounterButton = document.getElementById("startCounter");
const stopCounterButton = document.getElementById("stopCounter");
const resetCounterButton = document.getElementById("resetCounter");
const selectStudyTypeInput = document.getElementById("studyTypeInput");
const startBreakCounterBtn = document.getElementById("startBreakCounter");
const stopBreakCounterBtn = document.getElementById("stopBreakCounter");
const breakContainer = document.getElementById("breakContainer");

var stopwatch = document.getElementById("counter");
var vocabTimer = document.getElementById("vocabTimer");
var textbookTimer = document.getElementById("textbookTimer");
var readingTimer = document.getElementById("readingTimer");

//flow time----
var todayDate = document.getElementById("todayDate");
var currentTime = document.getElementById("currentTime");
var vocabFlowTime = document.getElementsByClassName("vocabFlowTime");
var textbookFlowTime = document.getElementsByClassName("textbookFlowTime");
var readingFlowTime = document.getElementsByClassName("readingFlowTime");
var flowTimeTable = document.getElementsByClassName("flowTimeTable");

///STOPWATCH ----------------------------------------------------
let timePassed = 0;
let timerInterval = null;
let vocab = 0;
let textbook = 0;
let reading = 0;

//get data from local storage
let timerCounter = JSON.parse(window.localStorage.getItem("timerData"));

// Initialisation of main stopwatch display
stopwatch.innerHTML = "<div>" + formatTime(timePassed) + "</div>";

/*
vocabTimer.innerHTML = "div" + formatTime(timerCounter["Vocab"]) + "</div>"
textbookTimer.innerHTML = "<div>" + formatTime(timerCounter["Textbook"]) + "</div>"
readingTimer.innerHTML = "<div>" + formatTime(timerCounter["Reading"]) + "</div>"
*/

//function for formatting how the time will appear
//input: time integer ----> output: formatted time
function formatTime(time) {
  let hour = Math.floor(time / 3600);
  let minutes = Math.floor(time / 60 - hour * 60);
  let seconds = Math.floor(time % 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  return `${hour}:${minutes}:${seconds}`;
}

//Start timer iterates every second and increases variable time passed by 1
function startTimer() {
  timerInterval = setInterval(() => {
    timePassed += 1;
    document.getElementById("counter").innerHTML = formatTime(timePassed);
    if (selectStudyTypeInput.value == "Vocab") {
      vocab += 1;
    } else if (selectStudyTypeInput.value == "Textbook") {
      textbook += 1;
    } else if (selectStudyTypeInput.value == "Reading") {
      reading += 1;
    }
  }, 1000);
}

//keys for local storage
var startKey;
var endKey;
var breakKey;
var today = new Date();

//When START BUTTON is clicked
//starts the timer counter and stores start time of study (time button is clicked) to local storage
//break buttons also become hidden until reset button clicked
startCounterButton.addEventListener("click", function (event) {
  startCounterButton.disabled = true;
  breakContainer.style.display = "none";
  startTimer();

  //get start time for flow time tracker
  //var time = today.getHours() + ":" + today.getMinutes();
  var time;
  if (today.getMinutes() < 10) {
    time = today.getHours() + ":0" + today.getMinutes();
  } else if (today.getMinutes() >= 10) {
    time = today.getHours() + ":" + today.getMinutes();
  }

  //store start time to local storage using key/value
  startKey = "startTime" + (startTimeIndex + 1).toString();
  startTimeIndex = startTimeIndex + 1;
  window.localStorage.setItem(startKey, JSON.stringify(time));
});

//STOP BUTTON
//stops the timer & re-renders all latest updates from local storage
stopCounterButton.addEventListener("click", (e) => {
  clearInterval(timerInterval);
  startCounterButton.disabled = false;

  //store Total study time for flow time tracker
  const timerData = {
    Vocab: vocab,
    Textbook: textbook,
    Reading: reading,
  };

  //stores to local storage and updates respective parts of flow time tracker w
  window.localStorage.setItem("timerData", JSON.stringify(timerData));
  document.getElementById("vocabTimer").innerHTML = formatTime(
    timerData["Vocab"]
  );
  document.getElementById("textbookTimer").innerHTML = formatTime(
    timerData["Textbook"]
  );
  document.getElementById("readingTimer").innerHTML = formatTime(
    timerData["Reading"]
  );

  //get end time for flow time tracker and store to local storage using key/value
  var time;
  if (today.getMinutes() < 10) {
    time = today.getHours() + ":0" + today.getMinutes();
  } else if (today.getMinutes() >= 10) {
    time = today.getHours() + ":" + today.getMinutes();
  }

  endKey = "endTime" + (endTimeIndex + 1).toString();
  endTimeIndex = endTimeIndex + 1;
  window.localStorage.setItem(endKey, JSON.stringify(time));

  //calls function to record the start and time in flow time tracker
  formatFlowTime();
});

//RESET BUTTON
//resets counter to 0 and displays the break buttons to encourage users to take a study break
resetCounterButton.addEventListener("click", (e) => {
  timePassed = 0;
  clearInterval(timerInterval);
  breakContainer.style.display = "block";
  document.getElementById("counter").innerHTML = formatTime(timePassed);
  startCounterButton.disabled = false;
});

//Event listeners for BREAK BUTTONS
//starts the stopwatch counter when start break button clicked
startBreakCounterBtn.addEventListener("click", function (event) {
  startBreakCounterBtn.disabled = true;
  startTimer();
});

//stops the counter and stores break time to local storage
stopBreakCounterBtn.addEventListener("click", function (event) {
  clearInterval(timerInterval);
  startBreakCounterBtn.disabled = false;

  breakKey = "breakTime" + (breakTimeIndex + 1).toString();
  breakTimeIndex = breakTimeIndex + 1;
  window.localStorage.setItem(breakKey, JSON.stringify(timePassed));

  //updates break time in flow time tracker
  formatBreakTime();
});

///FLOW TIME TRACKER --------------------------------------------------

//Show today's date by calling formatDate function
todayDate.innerHTML = formatDate(new Date());

//formatting the date in a specific way
function formatDate(date) {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return (
    "<strong>" +
    "Today:" +
    " " +
    day +
    " " +
    months[monthIndex] +
    " " +
    year +
    "</strong>"
  );
}
//indexes for local storage
var startTimeIndex = 0;
var endTimeIndex = 0;
var breakTimeIndex = 0;

var vocabStartTime;
var textbookStartTime;
var readingStartTime;
/*
var vocabBreakTime;
var textbookBreakTime;
var readingBreakTime;*/

//format the start and end times into the table
function formatFlowTime() {
  //get time from local storage
  let startTimeData = JSON.parse(window.localStorage.getItem(startKey));
  let endTimeData = JSON.parse(window.localStorage.getItem(endKey));

  //format for Vocab study type
  if (selectStudyTypeInput.value == "Vocab") {
    vocabStartTime = document.createElement("tr");
    vocabStartTime.setAttribute("class", "vocabFlowTime");
    vocabStartTime.innerHTML = "<td>" + startTimeData + "</td>";

    var vocabEndTime = document.createElement("td");
    vocabEndTime.innerHTML = "<td>" + endTimeData + "</td>";

    vocabStartTime.appendChild(vocabEndTime);

    vocabFlowTime[vocabFlowTime.length - 1].parentNode.insertBefore(
      vocabStartTime,
      vocabFlowTime[vocabFlowTime.length - 1].nextSibling
    );
  }

  //format for Textbook study type
  else if (selectStudyTypeInput.value == "Textbook") {
    textbookStartTime = document.createElement("tr");
    textbookStartTime.innerHTML = "<td>" + startTimeData + "</td>";
    var textbookEndTime = document.createElement("td");
    textbookEndTime.innerHTML = "<td>" + endTimeData + "</td>";

    textbookStartTime.appendChild(textbookEndTime);
    textbookFlowTime[textbookFlowTime.length - 1].parentNode.insertBefore(
      textbookStartTime,
      textbookFlowTime[textbookFlowTime.length - 1].nextSibling
    );
  }

  //format for Reading study type
  else if (selectStudyTypeInput.value == "Reading") {
    readingStartTime = document.createElement("tr");
    readingStartTime.innerHTML = "<p>" + startTimeData + "</p>";
    var readingEndTime = document.createElement("td");
    readingEndTime.innerHTML = "<td>" + endTimeData + "</td>";

    readingStartTime.appendChild(readingEndTime);
    readingFlowTime[readingFlowTime.length - 1].parentNode.insertBefore(
      readingStartTime,
      readingFlowTime[readingFlowTime.length - 1].nextSibling
    );
  }
}

//formatting the break time to the flow tracker based on study type input in stopwatch
function formatBreakTime() {
  let breakTimeData = JSON.parse(window.localStorage.getItem(breakKey));

  if (selectStudyTypeInput.value == "Vocab") {
    let vocabBreakTime = document.createElement("td");
    vocabBreakTime.innerHTML = "<td>" + breakTimeData + "</td>";

    let interruptionInput = document.createElement("td");
    interruptionInput.innerHTML =
      "<td>" + "<input type=checkbox name=interruptCheckbox class=interruptCheckboxInput>" + "</td>";

    vocabStartTime.append(vocabBreakTime, interruptionInput);
  } else if (selectStudyTypeInput.value == "Textbook") {
    let textbookBreakTime = document.createElement("td");
    textbookBreakTime.innerHTML = "<td>" + breakTimeData + "</td>";

    let interruptionInput = document.createElement("td");
    interruptionInput.innerHTML =
      "<td>" + "<input type=checkbox name=interruptCheckbox class=interruptCheckboxInput>" + "</td>";

    textbookStartTime.append(textbookBreakTime, interruptionInput);
  } else if (selectStudyTypeInput.value == "Reading") {
    let readingBreakTime = document.createElement("td");
    readingBreakTime.innerHTML = "<td>" + breakTimeData + "</td>";

    let interruptionInput = document.createElement("td");
    interruptionInput.innerHTML =
      "<td>" + "<input type=checkbox name=interruptCheckbox class=interruptCheckboxInput>" + "</td>";

    readingStartTime.append(readingBreakTime, interruptionInput);
  }
}
