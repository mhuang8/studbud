//Variables for HTML elements using DOM selection
//tasklist
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");
var taskInput = document.getElementById("taskInput");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");
//kanban
var tasklist = document.getElementById("tasklistTable");
var boardColumn = document.getElementById("boardColumn");
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


///NAVIGATION
  //------Modular code:THIS SECTION IN NAVIGATION.JS file in components folder
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
    console.log(this.currentPage);
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
const links = document.querySelectorAll('nav > ul > li > a');
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

///TASK LIST 
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


///KANBAN BOARD

function renderKanban(task){
  let card = document.createElement("div");
  card.setAttribute("class", "kanban-card");

  card.innerHTML = "<div class = kanbanPriority>" +"<p>" + task.priorityRating + "</p>" + "<div>"
  card.innerHTML += "<h4>" + task.taskDescription + "</h4>"
  card.innerHTML += "<p>" + "<strong>" + task.dueDate + "<strong>" + "</p>"
  card.innerHTML += "<p>" + task.completionTime + "</p>"

  boardColumn.appendChild(card);
}

///STOPWATCH
const startCounterButton = document.getElementById("startCounter");
const stopCounterButton = document.getElementById("stopCounter")
const resetCounterButton = document.getElementById("resetCounter")
const selectStudyTypeInput = document.getElementById("studyType")

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


startCounterButton.addEventListener("click", function(event){
  startCounterButton.disabled = true;
  startTimer();
 })

//  stop button should re-render all latest updates form local storage and stop timer and update local storage
 stopCounterButton.addEventListener("click", (e) => {
  clearInterval(timerInterval)
  startCounterButton.disabled = false;
  const timerData = {
    Vocab: vocab,
    Textbook: textbook,
    Reading: reading
  }
  window.localStorage.setItem('timerData', JSON.stringify(timerData))
  document.getElementById("vocabTimer").innerHTML = formatTime(timerData["Vocab"])
  document.getElementById("textbookTimer").innerHTML = formatTime(timerData["Textbook"])
  document.getElementById("readingTimer").innerHTML = formatTime(timerData["Reading"])
  

 })
 resetCounterButton.addEventListener("click", (e) => {
  timePassed = 0
  clearInterval(timerInterval)
  document.getElementById("counter").innerHTML = formatTime(timePassed)
  startCounterButton.disabled = false;

 })
///MUSIC PLAYER


// When the user clicks on the button, open the modal
musicBtn.onclick = function() {
  musicModal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == musicModal) {
    musicModal.style.display = "none";
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