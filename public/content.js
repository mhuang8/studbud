///CONTENT MANAGEMENT TOOLS - Music Player & Resource/Reading List

//Variables for HTML elements using DOM selection:
//music player----
var musicModal = document.getElementById("musicModal");
var musicBtn = document.getElementById("musicBtn");
const musicContainer = document.querySelector(".music-container");
const prevBtn = document.querySelector("#prevBtn");
const playBtn = document.querySelector("#playBtn");
const nextBtn = document.querySelector("#nextBtn");
const audioTrack = document.querySelector("#audioTrack");
const progressContainer = document.querySelector(".progress-container");
const progressBar = document.querySelector(".progress-bar");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const songCover = document.getElementById("songCover");

//resource list----
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
const openAllLinksBtn = document.getElementById("openAllLinksBtn");
const readLinksBtn = document.getElementById("readLinksBtn");
const watchLinksBtn = document.getElementById("watchLinksBtn");
const listenLinksBtn = document.getElementById("listenLinksBtn");

var resourceName = document.getElementById("resourceNameInput");
var resourceDescription = document.getElementById("resourceDescriptionInput");
var resourceLink = document.getElementById("resourceLinkInput");
var resource = document.getElementById("resourceCard");

///MUSIC PLAYER ---------------------------------------------------

// When the user clicks on the button, open the modal
musicBtn.addEventListener("click", function () {
  musicModal.style.display = "block";
});

//MODAL APPLIES TO MUSIC PLAYER AND RESOURCE LIST
// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == musicModal) {
    musicModal.style.display = "none";
  } else if (event.target == resourceModal) {
    resourceModal.style.display = "none";
  }
});

//Song titles
//sources (royalty free):
//https://www.youtube.com/watch?v=l1-MURE3kfc&ab_channel=BgHBeatsBgHBeats
//https://www.youtube.com/watch?v=t9r4cHSnjq4&ab_channel=LuKremBoLuKremBo
//https://www.youtube.com/watch?v=r6-8FEYuEYg&ab_channel=ZeekyBeatsZeekyBeats
//https://www.youtube.com/watch?v=XIhyti2Qa74&ab_channel=LuKremBoLuKremBoVerified
const songs = ["Imagine", "Bored", "Fresh Air", "Rose"];
const artists = ["BgH Beats", "LuKremBo", "Zeeky Beats", "LuKremBo"];
let songIndex = 1;
let artistIndex = 1;

//load song into DOM
loadSong(songs[songIndex], artists[artistIndex]);

//Function: update song details (title, artist, audio, cover img)
function loadSong(song, artist) {
  songTitle.innerText = song;
  songArtist.innerText = artist;
  audioTrack.src = `music/${song}.mp3`;
  songCover.src = `images/${song}.png`;
}

//plays the song and changes the button icon
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audioTrack.play();
}

//pauses the song and changes the button icon
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");

  audioTrack.pause();
}

//when user clicks the prev song button
function prevSong() {
  songIndex--;
  artistIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  if (artistIndex < 0) {
    artistIndex = artists.length - 1;
  }

  loadSong(songs[songIndex], artists[artistIndex]);
  playSong();
}

//when user clicks the next song button
function nextSong() {
  songIndex++;
  artistIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  if (artistIndex > artists.length - 1) {
    artistIndex = 0;
  }

  loadSong(songs[songIndex], artists[artistIndex]);
  playSong();
}

//update the progress bar as song plays
function updateProgress(e) {
  //console.log(e.srcElement.currentTime)
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
}

//when users click on progress bar, jumps to that part of song
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audioTrack.duration;

  audioTrack.currentTime = (clickX / width) * duration;
}

//EVENT LISTENERS
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

//Change songs
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
audioTrack.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);
audioTrack.addEventListener("ended", nextSong);

///RESOURCE LIST ---------------------------------------------------

/*function openResourceModal() {
    resourceModal.style.display = "block";
  }*/

//displays the modal with form when buttons are clicked
addReadResourceBtn.addEventListener("click", function () {
  resourceModal.style.display = "block";
});

addWatchResourceBtn.addEventListener("click", function () {
  resourceModal.style.display = "block";
});

addListenResourceBtn.addEventListener("click", function () {
  resourceModal.style.display = "block";
});

//formats the card when form is submitted & closes modal
resourceForm.addEventListener("submit", function (event) {
  event.preventDefault();

  renderResourceCard();
  resourceModal.style.display = "none";
  resourceForm.reset();
});

//arrays for storing links for that page (read,watch,listen)
var readLinksArray = [];
var watchLinksArray = [];
var listenLinksArray = [];

//formats the resource card to the page using user inputs
function renderResourceCard() {
  let link = resourceLink.value;

  let resourceCard = document.createElement("div");
  resourceCard.setAttribute("id", "resourceCard");
  resourceCard.innerHTML += "<div class='resourceBarDecoration'>" + "</div>";

  let delResource = document.createElement("button");
  delResource.setAttribute("class", "delResourceBtn");
  delResource.setAttribute("type", "button");
  delResource.innerHTML = "<i class='fa fa-trash'>" + "</i>";
  resourceCard.appendChild(delResource);

  let editResource = document.createElement("button");
  editResource.setAttribute("class", "editResourceBtn");
  editResource.setAttribute("type", "button");
  editResource.innerHTML = "<i class='fa fa-edit'>" + "</i>";
  resourceCard.appendChild(editResource);

  resourceCard.innerHTML += "<h4>" + resourceName.value + "</h4>";
  resourceCard.innerHTML += "<p>" + resourceDescription.value + "</p>";

  let a = document.createElement("a");
  a.setAttribute("href", link);
  a.setAttribute("target", "_blank");
  a.setAttribute("class", "resourceHyperLink");
  a.innerHTML = "<p>" + link + "</p>";
  resourceCard.appendChild(a);

  //adding the card to the page that is active and pushing link input to array
  if (readLink.className == "active") {
    readPage.appendChild(resourceCard);
    readLinksArray.push(link);
    console.log(readLinksArray);
  } else if (watchLink.className == "active") {
    watchPage.appendChild(resourceCard);
    watchLinksArray.push(link);
    console.log(watchLinksArray);
  } else if (listenLink.className == "active") {
    listenPage.appendChild(resourceCard);
    listenLinksArray.push(link);
    console.log(listenLinksArray);
  }

  //delete the resource
  var delResourceBtn = document.getElementsByClassName("delResourceBtn");
  for (let i = 0; i < delResourceBtn.length; i++) {
    delResourceBtn[i].addEventListener("click", function (event) {
      event.preventDefault();
      resourceCard.remove();
      //console.log("delete");
    });
  }

  //delete the link in the resource
  var editResourceBtn = document.getElementsByClassName("editResourceBtn");
  for (let i = 0; i < editResourceBtn.length; i++) {
    editResourceBtn[i].addEventListener("click", function (event) {
      event.preventDefault();
      a.setAttribute("contenteditable", "true");
    });
  }
}

//Open all read links on that specific page
//NOTE TO MARKER: Please disable Chrome pop-up blocks in order for this button to work successfully in opening all links together. The pop-up block may appear upon use for the first time.
readLinksBtn.addEventListener("click", function () {
  for (let i = 0; i < readLinksArray.length; i++) {
    window.open(readLinksArray[i], "_blank");
  }
});

watchLinksBtn.addEventListener("click", function () {
  for (let i = 0; i < watchLinksArray.length; i++) {
    window.open(watchLinksArray[i], "_blank");
  }
});

listenLinksBtn.addEventListener("click", function () {
  for (let i = 0; i < listenLinksArray.length; i++) {
    window.open(listenLinksArray[i], "_blank");
  }
});
