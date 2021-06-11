//Variables for HTML elements using DOM selection
//tasklist
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");
var taskInput = document.getElementById("taskInput");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");
var tasklist = document.getElementById("tasklistTable");
//kanban
var boardContainer = document.getElementById("board-container");
var toDoColumn = document.getElementById("toDoColumn");
var boardNameInput = document.getElementById("boardNameInput");
//stopwatch

//music player
var musicModal = document.getElementById("musicModal");
var musicBtn = document.getElementById("musicBtn");
const musicContainer = document.querySelector('.music-container');
const prevBtn = document.querySelector('#prevBtn');
const playBtn= document.querySelector('#playBtn');
const nextBtn= document.querySelector('#nextBtn');
const audioTrack = document.querySelector('#audioTrack')
const progressContainer = document.querySelector('.progress-container');
const progressBar = document.querySelector('.progress-bar');
const songTitle = document.getElementById("songTitle")
const songArtist = document.getElementById("songArtist")
const songCover = document.getElementById("songCover")

//resource list
var resourceModal = document.getElementById("resourceModal");
const addReadResourceBtn = document.getElementById("addReadResourceBtn");
const addWatchResourceBtn = document.getElementById("addWatchResourceBtn");
const addListenResourceBtn = document.getElementById("addListenResourceBtn");
const submitResourceBtn = document.getElementById("submitResourceBtn");
const readLink = document.getElementById("readLink");
const watchLink = document.getElementById("watchLink");
const listenLink = document.getElementById("listenLink");
const readPage = document.getElementById("readPage");
const watchPage = document.getElementById("watch");
const listenPage = document.getElementById("listen");
const resourceForm = document.getElementById("resourceForm");


///NAVIGATION ---------------------------------------------------
//------Modular code:THIS SECTION IN NAVIGATION.JS file in components folder----//
class Navigation{
  constructor(links, pages){
    this.links = links;
    this.pages = pages;
    this.currentPage = null;
  }

  getLinks(){
    console.log(this.links);
  }

  setPage(pageId){
    this.currentPage = pageId;
    //console.log(this.currentPage);
    //change the page within the html
    this.links.forEach((link)=> {
      link.classList.remove('active');
      if (this.getHash(link) === pageId){
        link.classList.add('active');
      }
    })
    this.pages.forEach((page)=> {
      page.style.display ='none';
    })
    document.getElementById(pageId).style.display = "block";
  }

  getHash(link){
    return link.href.split("#")[1];

  }
}
//export default Navigation;
//---------------------------------
//import Navigation from './components/navigation';

const links = document.querySelectorAll('.main-nav > ul > li > a');
const pages = document.querySelectorAll('.page-container');

var nav = new Navigation(links, pages);
nav.getLinks();

nav.links.forEach(function(link){
  link.addEventListener('click', function(){
    //console.log(nav.getHash(link));
    let pageId = nav.getHash(link);
    nav.setPage(pageId)
  })
})
//NAV collapse-------
hamburgerMenu = document.getElementById("hamburgerMenu")
verticalNav = document.getElementById("vertical-nav")

function openNav() {
  document.getElementById("vertical-nav").style.width = "11.25rem";
  document.getElementById("main").style.marginLeft = "11.25rem";

  verticalNav.classList.add('open');
  hamburgerMenu.querySelector('i.fa').classList.remove('fa-bars');
  hamburgerMenu.querySelector('i.fa').classList.add('fa-times');
}

function closeNav() {
  document.getElementById("vertical-nav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";

  verticalNav.classList.remove('open');
  hamburgerMenu.querySelector('i.fa').classList.remove('fa-times');
  hamburgerMenu.querySelector('i.fa').classList.add('fa-bars');
}

hamburgerMenu.addEventListener('click', () => {
  var isOpen = verticalNav.classList.contains('open')

  if(isOpen) {
    closeNav();
  } 
  else{
    openNav();
  }
})

//RESOURCE LIST NAV---------------------------------
const subLinks = document.querySelectorAll('.resource-nav > ul > li > a');
const subPages = document.querySelectorAll('.sub-page-container');

var resourceNav = new Navigation(subLinks, subPages);

resourceNav.links.forEach((link) => {
  link.addEventListener('click', function(){
    let pageId = resourceNav.getHash(link);
    resourceNav.setPage(pageId);
  })
})

///TASK LIST -------------------------------------------------------
//event listener for when button clicked
//OR button.addEventListener("click", function(event) {
form.addEventListener("submit", function(event){
  //make sure none of the browser function will happen automatically
  event.preventDefault();
  //takes the user input
  let task = taskInput.value; 
  let dueDate = dueDateInput.value;
  let completionTime = completionTimeInput.value;
  let estimatedTime = estimatedTimeInput.value;
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
  //add it as a task using addTask function
  addTask(task, dueDate, completionTime, estimatedTime, priorityRating, false);
  //console out for debugging
  console.log(taskListArray);
})

//empty array to store tasks
var taskListArray = []

//The function creates the object & pushes it to an array 
function addTask(taskDescription, dueDate, completionTime,estimatedTime, priorityRating, completionStatus) {
  let d = new Date();
  let dateCreated = d.getFullYear();
  let task = {
    taskDescription,
    dueDate,
    dateCreated, 
    completionTime,
    estimatedTime,
    priorityRating,
    completionStatus
  };

  //add the task to the array
  taskListArray.push(task);
  ///return task;
  renderTask(task);
  //calling function for kanban board
  renderKanban(task);
}


//ADD the task to the screen via HTML
  //pulling the task as a complete object rather than individual parts
function renderTask(task){
  //create html elements
  let item = document.createElement("tr");
  item.setAttribute("class", "newTaskItem");

  let cell1 =  document.createElement("td");
  cell1.innerHTML += "<label for=taskCheckbox>" + "<input type=checkbox name=taskCheckbox class=taskCheckboxInput>" + "<strong>" + task.taskDescription + "</strong>" + "</label>";

  let cell2 =  document.createElement("td");
  cell2.innerHTML += "<p>" + task.dueDate + "</p>";

  let cell3 =  document.createElement("td");
  cell3.innerHTML += "<p>" + task.completionTime + "</p>";

  let cell4 =  document.createElement("td");
  cell4.innerHTML += "<p>" + task.estimatedTime + ' ' + 'min' + "</p>";

  let cell5 =  document.createElement("td");
  cell5.innerHTML += "<p>" + task.priorityRating + "</p>";

  let cell6 = document.createElement("td");
  
  item.append(cell1, cell2, cell3, cell4, cell5, cell6);

  tasklistTable.appendChild(item);

  //Extra task DOM elements - further user interaction e.g delete
  let delButton = document.createElement("button");
  
    //create a textNode
  let delButtonText = document.createTextNode("Delete");
    //get the text appended to button element
  delButton.appendChild(delButtonText);
    //append whole button to the item created
  cell6.appendChild(delButton);

  //Event Listeners for DOM elements
  delButton.addEventListener("click", function(event){
   event.preventDefault();
   item.remove();
  })
  //Clear the input form
  form.reset();

  //Setting the style colours depending on priority rating
  var newTaskItem = document.getElementsByClassName("newTaskItem");
  var taskCheckboxInput = document.getElementsByClassName("taskCheckboxInput");
  //Iteration: changed the colours to appropriately correlate with the priority (pink = high, blue = low)
    if (task.priorityRating  === "Low"){
      newTaskItem[newTaskItem.length-1].style.backgroundColor = "#E2EDF7";
      taskCheckboxInput[taskCheckboxInput.length-1].style.border = "solid #8CB7F2";
      //taskCheckboxInput.addEventListener("click", function(event){
        //askCheckboxInput.style.backgroundColor = "solid #F7D7E7";
    }
    else if(task.priorityRating  === "Medium"){
      newTaskItem[newTaskItem.length-1].style.backgroundColor = "#FCF4DD";
      taskCheckboxInput[taskCheckboxInput.length-1].style.border = "solid #F7D382";
    }
    else if(task.priorityRating  === "High"){
      newTaskItem[newTaskItem.length-1].style.backgroundColor = "#F7D7E7";
      taskCheckboxInput[taskCheckboxInput.length-1].style.border = "solid #EAA0D3";
    }
  }


///KANBAN BOARD ---------------------------------------------------------
const kanbanCard = document.querySelector('#kanbanCard');
const boardColumns = document.querySelectorAll('.boardColumn');
var kanbanPriority = document.getElementsByClassName("kanbanPriority");
var boardBarDecoration = document.querySelectorAll('.boardBarDecoration');
const kanbanForm = document.getElementById("kanbanForm");

//render kanban board 
function renderKanbanBoard(boardName){
  let board = document.createElement("div");
  board.setAttribute("class", "boardColumn");
  board.innerHTML += "<div class='boardBarDecoration'>" + "</div>"
  board.innerHTML += "<h4 contenteditable='true'>" + boardName + "</h4>";

  //append the board to the container
  boardContainer.appendChild(board);
}

//render kanban card
function renderKanban(task){
  let card = document.createElement("div");
  card.setAttribute("id", "kanbanCard");
  card.setAttribute("draggable", "true");

  card.innerHTML = "<div class = kanbanPriority>" +"<p>" + task.priorityRating + "</p>" + "<div>"
  card.innerHTML += "<h4>" + task.taskDescription + "</h4>"
  card.innerHTML += "<p>" + "<i class='far fa-calendar-check'>" + "</i>" + ' ' + "<strong>" + task.dueDate + "<strong>" + ' ' + '(' + task.completionTime + ')' + "</p>"
  card.innerHTML += "<p>" + task.estimatedTime + ' ' + 'min' + "</p>";
  //append the card to the To-Do Board 
  toDoColumn.appendChild(card);

  if (task.priorityRating  === "Low"){
    kanbanPriority[kanbanPriority.length-1].style.backgroundColor = "#5598F5";
  }
  else if(task.priorityRating  === "Medium"){
    kanbanPriority[kanbanPriority.length-1].style.backgroundColor = "#F8BF53";
  }
  else if(task.priorityRating  === "High"){
    kanbanPriority[kanbanPriority.length-1].style.backgroundColor = "#EB68A9";
  }
  console.log(kanbanPriority);
}

//add a new board when user submits the form
kanbanForm.addEventListener("submit", function(event){
  let boardName = boardNameInput.value; 
  event.preventDefault();
  renderKanbanBoard(boardName); 
})

//DRAG AND DROP functionality
let draggedItem = null;

/*for (var i of cardItems){
  i.addEventListener('dragstart', dragStart);
}

function dragStart() {
  console.log('dragstart');
  draggedItem  = i;
  setTimeout(function(){
    i.style.display = 'none';
  }, 0)
}*/

/*for (let i = 0; i < cardArray.length; i++){
const cardItem = cardArray[i];*/

/*for (let i = 0; i < cardArray.length; i++){
const cardItem = cardArray[i];*/
document.body.addEventListener('dragstart', function (event) {
  if( event.target.id == 'kanbanCard' ) {
    draggedItem  = event.target;
    console.log('dragstart')
    setTimeout(function(){
      event.target.style.display = 'none';
    }, 0)
  };
});

document.body.addEventListener('dragend', function (event) {
  if( event.target.id == 'kanbanCard' ) {
    console.log('dragend')
    setTimeout(function(){
      event.target.style.display = 'block';
      draggedItem  = null;
    }, 0)
  };
});

for (let j = 0; j< boardColumns.length; j++){
  const boardColumn = boardColumns[j];

  boardColumn.addEventListener('dragover', function (event) {
    event.preventDefault();
    console.log('dragover')
  });

  boardColumn.addEventListener('dragenter', function (event) {
    event.preventDefault();
    console.log('dragenter')
  });

  boardColumn.addEventListener('drop', function (event) {
    console.log('drop');
    this.append(draggedItem);
    
  });
}

  /*cardItem.addEventListener('dragend', function(){
    console.log('dragend');
    setTimeout(function(){
      draggedItem.style.display = 'block';
      draggedItem = null;
    }, 0);
  })*/

//}

///STOPWATCH ----------------------------------------------------
const startCounterButton = document.getElementById("startCounter");
const stopCounterButton = document.getElementById("stopCounter")
const resetCounterButton = document.getElementById("resetCounter")
const selectStudyTypeInput = document.getElementById("studyTypeInput")

let timePassed = 0;
let timerInterval = null
let vocab = 0
let textbook = 0
let reading = 0

var stopwatch = document.getElementById("counter");
var vocabTimer = document.getElementById("vocabTimer")
var textbookTimer = document.getElementById("textbookTimer")
var readingTimer = document.getElementById("readingTimer")
//get data from local storage
let timerCounter = JSON.parse(window.localStorage.getItem('timerData'))

// Initialisation of main stopwatch display
stopwatch.innerHTML= `
<div>
  ${formatTime(timePassed)}
</div>
`

// Initialisation of display in table format
vocabTimer.innerHTML=`
<div>
  ${formatTime(timerCounter["Vocab"])}
</div>
`
textbookTimer.innerHTML=`
<div>
  ${formatTime(timerCounter["Textbook"])}
</div>
`
readingTimer.innerHTML=`
<div>
  ${formatTime(timerCounter["Reading"])}
</div>
`
//input: time integer
//output: formatted time
function formatTime(time){
  let hour = Math.floor(time/3600)
  let minutes = Math.floor(time/60 - hour * 60 );
  let seconds = Math.floor(time % 60);
  if(seconds < 10){
    seconds = `0${seconds}`
  }
  if(minutes < 10){
    minutes = `0${minutes}`
  }
  if(hour < 10){
    hour = `0${hour}`
  }
  return `${hour}:${minutes}:${seconds}` 
}

//Start timer iterates every second and increases variable time passed by 1
function startTimer() {
  timerInterval = setInterval(() => {
    timePassed += 1
    document.getElementById("counter").innerHTML = formatTime(timePassed)
    if (selectStudyTypeInput.value == "Vocab") {
      vocab += 1
    }
    else if (selectStudyTypeInput.value == "Textbook") {
      textbook += 1
    }
    else if (selectStudyTypeInput.value == "Reading") {
      reading += 1
    }
  }, 1000)
}

var startKey;
var endKey;
var today = new Date();

startCounterButton.addEventListener("click", function(event){
  startCounterButton.disabled = true;
  startTimer();

  //get start time for flow time tracker
   //var time = today.getHours() + ":" + today.getMinutes();
   
   var time;
   if(today.getMinutes() < 10){
    time = today.getHours() + ":0" + today.getMinutes();
   }
   else if(today.getMinutes() >= 10){
    time = today.getHours() + ":" + today.getMinutes();
   }
  
   //store to local storage using key/value
   startKey = "startTime" + (startTimeIndex + 1).toString();
   startTimeIndex = startTimeIndex + 1;
   window.localStorage.setItem(startKey, JSON.stringify(time));

  
 })

//  stop button should re-render all latest updates form local storage and stop timer and update local storage
 stopCounterButton.addEventListener("click", (e) => {
  clearInterval(timerInterval)
  startCounterButton.disabled = false;
  //local storage
  const timerData = {
    Vocab: vocab,
    Textbook: textbook,
    Reading: reading
  }
  window.localStorage.setItem('timerData', JSON.stringify(timerData))
  document.getElementById("vocabTimer").innerHTML = formatTime(timerData["Vocab"])
  document.getElementById("textbookTimer").innerHTML = formatTime(timerData["Textbook"])
  document.getElementById("readingTimer").innerHTML = formatTime(timerData["Reading"])
  
  //get end time for flow time tracker
  var time;
   if(today.getMinutes() < 10){
    time = today.getHours() + ":0" + today.getMinutes();
   }
   else if(today.getMinutes() >= 10){
    time = today.getHours() + ":" + today.getMinutes();
   }
  
   //store to local storage using key/value
   endKey = "endTime" + (endTimeIndex + 1).toString();
   endTimeIndex = endTimeIndex + 1;
   window.localStorage.setItem(endKey, JSON.stringify(time));

   //record the start and time in flow time tracker
   formatFlowTime();
 })

 resetCounterButton.addEventListener("click", (e) => {
  timePassed = 0
  clearInterval(timerInterval)
  document.getElementById("counter").innerHTML = formatTime(timePassed)
  startCounterButton.disabled = false;

 })

///FLOW TIME TRACKER --------------------------------------------------

 var todayDate = document.getElementById("todayDate");
 
 //Show today's date by calling formatDate function
 todayDate.innerHTML= (formatDate(new Date())); 

 function formatDate (date){
   var months = [
     "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
   ]

   var day = date.getDate();
   var monthIndex = date.getMonth();
   var year = date.getFullYear();

   return '<strong>' + "Today:" + ' ' + day + ' ' + months[monthIndex] + ' ' + year + '</strong>';
 }

 //get current time
 var currentTime = document.getElementById("currentTime");
 var vocabFlowTime = document.getElementsByClassName("vocabFlowTime")
 var textbookFlowTime = document.getElementsByClassName("textbookFlowTime")
 var readingFlowTime = document.getElementsByClassName("readingFlowTime")
 var flowTimeTable = document.getElementsByClassName("flowTimeTable")
 var startTimeIndex = 0;
 var endTimeIndex = 0;

 function formatFlowTime() {
   //get time from local storage
   let startTimeData = JSON.parse(window.localStorage.getItem(startKey));
   let endTimeData = JSON.parse(window.localStorage.getItem(endKey));
   
   if (selectStudyTypeInput.value == "Vocab") {
    var vocabStartTime = document.createElement ("tr")
    vocabStartTime.setAttribute("class", "vocabFlowTime");
    vocabStartTime.innerHTML = "<td>" + startTimeData + "</td>"
    var vocabEndTime = document.createElement ("td")
    vocabEndTime.innerHTML = "<td>" + endTimeData + "</td>"

    vocabStartTime.appendChild(vocabEndTime);
    vocabFlowTime[vocabFlowTime.length-1].parentNode.insertBefore(vocabStartTime, vocabFlowTime[vocabFlowTime.length-1].nextSibling);
   } 

   else if (selectStudyTypeInput.value == "Textbook") {
    var textbookStartTime = document.createElement ("tr")
    textbookStartTime.innerHTML = "<td>" + startTimeData + "</td>"
    var textbookEndTime = document.createElement ("td")
    textbookEndTime.innerHTML = "<td>" + endTimeData + "</td>"

    textbookStartTime.appendChild(textbookEndTime);
    textbookFlowTime[textbookFlowTime.length-1].parentNode.insertBefore(textbookStartTime, textbookFlowTime[textbookFlowTime.length-1].nextSibling);
   } 
   else if (selectStudyTypeInput.value == "Reading") {
    var readingStartTime = document.createElement ("tr")
    readingStartTime.innerHTML = "<p>" + startTimeData + "</p>"
    var readingEndTime = document.createElement ("td")
    readingEndTime.innerHTML = "<td>" + endTimeData + "</td>"

    readingStartTime.appendChild(readingEndTime);
    readingFlowTime[readingFlowTime.length-1].parentNode.insertBefore(readingStartTime, readingFlowTime[readingFlowTime.length-1].nextSibling);

   }
  }

///MUSIC PLAYER ---------------------------------------------------

// When the user clicks on the button, open the modal
musicBtn.onclick = function() {
  musicModal.style.display = "block";
}

//APPLIES TO MUSIC PLAYER AND RESOURCE LIST
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == musicModal) {
    musicModal.style.display = "none";
  }
  else if (event.target == resourceModal) {
    resourceModal.style.display = "none";
  }
}

//Song titles
//source
  //https://www.youtube.com/watch?v=l1-MURE3kfc&ab_channel=BgHBeatsBgHBeats
  //https://www.youtube.com/watch?v=t9r4cHSnjq4&ab_channel=LuKremBoLuKremBo
  //https://www.youtube.com/watch?v=r6-8FEYuEYg&ab_channel=ZeekyBeatsZeekyBeats
const songs = ['Imagine', 'Bored', 'Fresh Air', 'Rose'];
const artists = ['BgH Beats', 'LuKremBo', 'Zeeky Beats', 'LuKremBo'];
let songIndex = 1;
let artistIndex = 1;

//load song into DOM
loadSong(songs[songIndex], artists[artistIndex]);

//Function: update song details (title, artist, audio, cover img)
function loadSong(song, artist) {
  songTitle.innerText = song
  songArtist.innerText = artist
  audioTrack.src = `music/${song}.mp3`
  songCover.src = `images/${song}.jpg`
}

function playSong(){
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audioTrack.play();
}

function pauseSong(){
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  playBtn.querySelector('i.fas').classList.add('fa-play');

  audioTrack.pause();
}

function prevSong(){
  songIndex--
  artistIndex--
  if(songIndex < 0) {
    songIndex = songs.length -1
  }
  if(artistIndex < 0) {
    artistIndex = artists.length -1
  }

  loadSong(songs[songIndex], artists[artistIndex]);
  playSong();
}

function nextSong(){
  songIndex++
  artistIndex++
  if(songIndex > songs.length - 1 ) {
    songIndex = 0
  }
  if(artistIndex > artists.length - 1) {
    artistIndex = 0
  }
  
  loadSong(songs[songIndex], artists[artistIndex]);
  playSong();
}

//update the progress bar as song plays
function updateProgress(e) {
  //console.log(e.srcElement.currentTime)
  const {duration, currentTime} = e.srcElement
  const progressPercent = (currentTime/duration) * 100
  progressBar.style.width = `${progressPercent}%`
}

//when users click on progress bar, jumps to that part of song
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audioTrack.duration

  audioTrack.currentTime = (clickX / width) * duration

}

//event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play')

  if(isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})

//Change songs 
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)
audioTrack.addEventListener('timeupdate', updateProgress)
progressContainer.addEventListener('click', setProgress)
audioTrack.addEventListener('ended', nextSong)

///RESOURCE LIST ---------------------------------------------------
/*
var resourceNameInput = document.getElementById("resourceNameInput");
var resourceDescriptionInput = document.getElementById("resourceDescriptionInput");
//open modal */

function openResourceModal(){
  resourceModal.style.display = "block"
}
/*
addReadResourceBtn.onclick = function() {
  resourceModal.style.display = "block";
}

addWatchResourceBtn.onclick = function() {
  resourceModal.style.display = "block";
}

addListenResourceBtn.onclick = function() {
  resourceModal.style.display = "block";
}*/
var resourceName = document.getElementById("resourceNameInput")
var resourceDescription = document.getElementById("resourceDescriptionInput")
var resourceLink = document.getElementById("resourceLinkInput")
var resource = document.getElementById("resourceCard")
var delResourceBtn = document.getElementById("delResourceBtn")

resourceForm.addEventListener("submit", function(event){
  event.preventDefault();

  renderResourceCard();
  resourceModal.style.display = "none";
  resourceForm.reset();
})


var readLinksArray = [];
var watchLinksArray = [];
var listenLinksArray = [];

function renderResourceCard(){
  let link = resourceLink.value;

  let resourceCard = document.createElement("div");
  resourceCard.setAttribute("id", "resourceCard");

  let delResource = document.createElement("button");
  delResource.setAttribute("id", "delResourceBtn")
  delResource.setAttribute("type", "button");
  
  delResource.innerHTML = "<i class='fas fa-trash'>" + "</i>"
  resourceCard.appendChild(delResource);
  
  let a = document.createElement('a');
  a.setAttribute("href",link);
  a.setAttribute("target","_blank");
  a.setAttribute("class","resourceHyperLink");
  a.innerHTML = "<h4>" + resourceName.value + "</h4>";
  resourceCard.appendChild(a);

  //resourceCard.innerHTML += "<h4>" + resourceName.value + "</h4>"
  resourceCard.innerHTML += "<p>" + resourceDescription.value + "</p>"
  //resourceCard.innerHTML +=  "<a href = link>" + "link" + "</a>"

  if (readLink.className  == "active"){
    readPage.appendChild(resourceCard);
    readLinksArray.push(link);
    console.log(readLinksArray);
  }
  else if (watchLink.className  == "active"){
    watchPage.appendChild(resourceCard);
    watchLinksArray.push(link);
    console.log(watchLinksArray);
  }
  else if (listenLink.className  == "active"){
    listenPage.appendChild(resourceCard);
    listenLinksArray.push(link);
    console.log(listenLinksArray);
  }

  delResource.addEventListener("click", function(event){
    event.preventDefault();
    resourceCard.remove();
    console.log("delete")
  })

  /*
  function deleteResource() {
    resource.remove();
    console.log("delete")
  }*/
}

//NOTE TO MARKER: Please disable Chrome pop-up blocks in order for this button to work successfully in opening all links together. The pop-up block may appear upon use for the first time.
function openReadLinks(){
  for (let i = 0; i < readLinksArray.length; i++){
    window.open(readLinksArray[i], '_blank');
  }
}

function openWatchLinks(){
  for (let i = 0; i < watchLinksArray.length; i++){
    window.open(watchLinksArray[i], '_blank');
  }
}

function openListenLinks(){
  for (let i = 0; i < listenLinksArray.length; i++){
    window.open(listenLinksArray[i], '_blank');
  }
}




