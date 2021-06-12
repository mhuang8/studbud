///TASK MANAGEMENT TOOLS - Tasklist & Kanban Board (AND BACKUP NON-MODULE NAV)

//Variables for HTML elements using DOM selection:
//nav----
hamburgerMenu = document.getElementById("hamburgerMenu");
verticalNav = document.getElementById("vertical-nav");
//tasklist----
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");
var taskInput = document.getElementById("taskInput");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");
var tasklist = document.getElementById("tasklistTable");
//kanban----
var boardContainer = document.getElementById("board-container");
var toDoColumn = document.getElementById("toDoColumn");
var boardNameInput = document.getElementById("boardNameInput");
const kanbanCard = document.querySelector("#kanbanCard");
const boardColumns = document.querySelectorAll(".boardColumn");
var kanbanPriority = document.getElementsByClassName("kanbanPriority");
var boardBarDecoration = document.querySelectorAll(".boardBarDecoration");
const kanbanForm = document.getElementById("kanbanForm");

///NAVIGATION ---------------------------------------------------
//-----Uncomment this section if running through Live Server (not through Node server/npm run start)----//
/*class Navigation {
  constructor(links, pages) {
    this.links = links;
    this.pages = pages;
    this.currentPage = null;
  }

  getLinks() {
    console.log(this.links);
  }

  setPage(pageId) {
    this.currentPage = pageId;
    //console.log(this.currentPage);
    //change the page within the html
    this.links.forEach((link) => {
      link.classList.remove("active");
      if (this.getHash(link) === pageId) {
        link.classList.add("active");
      }
    });
    this.pages.forEach((page) => {
      page.style.display = "none";
    });
    document.getElementById(pageId).style.display = "block";
  }

  getHash(link) {
    return link.href.split("#")[1];
  }
}*/
//---------------------------------

//----Comment out this line if running through VSCode Live Server (not through Node server/npm run start)----//
import Navigation from './components/navigation';

const links = document.querySelectorAll(".main-nav > ul > li > a");
const pages = document.querySelectorAll(".page-container");

var nav = new Navigation(links, pages);
nav.getLinks();

nav.links.forEach(function (link) {
  link.addEventListener("click", function () {
    //console.log(nav.getHash(link));
    let pageId = nav.getHash(link);
    nav.setPage(pageId);
  });
});

//NAV collapse(open & close nav)-------
function openNav() {
  document.getElementById("vertical-nav").style.width = "11.25rem";
  document.getElementById("main").style.marginLeft = "11.25rem";

  verticalNav.classList.add("open");
  hamburgerMenu.querySelector("i.fa").classList.remove("fa-bars");
  hamburgerMenu.querySelector("i.fa").classList.add("fa-times");
}

function closeNav() {
  document.getElementById("vertical-nav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";

  verticalNav.classList.remove("open");
  hamburgerMenu.querySelector("i.fa").classList.remove("fa-times");
  hamburgerMenu.querySelector("i.fa").classList.add("fa-bars");
}

hamburgerMenu.addEventListener("click", () => {
  var isOpen = verticalNav.classList.contains("open");

  if (isOpen) {
    closeNav();
  } else {
    openNav();
  }
});

//RESOURCE LIST SUB NAV-----------
const subLinks = document.querySelectorAll(".resource-nav > ul > li > a");
const subPages = document.querySelectorAll(".sub-page-container");

var resourceNav = new Navigation(subLinks, subPages);

resourceNav.links.forEach((link) => {
  link.addEventListener("click", function () {
    let pageId = resourceNav.getHash(link);
    resourceNav.setPage(pageId);
  });
});

///TASK LIST -------------------------------------------------------
//event listener for when form submitted/button clicked
//OR button.addEventListener("click", function(event) {
form.addEventListener("submit", function (event) {
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
});

//empty array to store tasks
var taskListArray = [];

//The function creates the object & pushes it to an array
function addTask(
  taskDescription,
  dueDate,
  completionTime,
  estimatedTime,
  priorityRating,
  completionStatus
) {
  let d = new Date();
  let dateCreated = d.getFullYear();
  let task = {
    taskDescription,
    dueDate,
    dateCreated,
    completionTime,
    estimatedTime,
    priorityRating,
    completionStatus,
  };

  //add the task to the array
  taskListArray.push(task);
  ///return task for task list;
  renderTask(task);
  //calling function for kanban board
  renderKanban(task);
}

//ADD the task to the screen via HTML
//pulling the task as a complete object rather than individual parts
function renderTask(task) {
  //create html elements in table format for alignment
  let item = document.createElement("tr");
  item.setAttribute("class", "newTaskItem");

  let cell1 = document.createElement("td");
  cell1.innerHTML +=
    "<label for=taskCheckbox>" +
    "<input type=checkbox name=taskCheckbox class=taskCheckboxInput>" +
    "<strong>" +
    task.taskDescription +
    "</strong>" +
    "</label>";

  let cell2 = document.createElement("td");
  cell2.innerHTML += "<p>" + task.dueDate + "</p>";

  let cell3 = document.createElement("td");
  cell3.innerHTML += "<p>" + task.completionTime + "</p>";

  let cell4 = document.createElement("td");
  cell4.innerHTML += "<p>" + task.estimatedTime + " " + "min" + "</p>";

  let cell5 = document.createElement("td");
  cell5.innerHTML += "<p>" + task.priorityRating + "</p>";

  let cell6 = document.createElement("td");

  item.append(cell1, cell2, cell3, cell4, cell5, cell6);

  tasklistTable.appendChild(item);

  //Extra task DOM elements - further user interaction e.g delete
  let delButton = document.createElement("button");
  delButton.setAttribute("class", "taskDelBtn");
  //create a textNode
  delButton.innerHTML = "<i class='fas fa-trash'>" + "</i>";
  //get the text appended to button element

  //append whole button to the item created
  cell6.appendChild(delButton);

  //Event Listeners for DOM elements
  delButton.addEventListener("click", function (event) {
    event.preventDefault();
    item.remove();
  });
  //Clear the input form
  form.reset();

  //Setting the style colours depending on priority rating
  var newTaskItem = document.getElementsByClassName("newTaskItem");
  var taskCheckboxInput = document.getElementsByClassName("taskCheckboxInput");

  //ITERATION: changed the colours to correlate more appropriately with the priority (pink = high, blue = low, yellow = medium)
  if (task.priorityRating === "Low") {
    newTaskItem[newTaskItem.length - 1].style.backgroundColor = "#E2EDF7";
    taskCheckboxInput[taskCheckboxInput.length - 1].style.border =
      "solid #8CB7F2";
    //taskCheckboxInput.addEventListener("click", function(event){
    //askCheckboxInput.style.backgroundColor = "solid #F7D7E7";
  } else if (task.priorityRating === "Medium") {
    newTaskItem[newTaskItem.length - 1].style.backgroundColor = "#FCF4DD";
    taskCheckboxInput[taskCheckboxInput.length - 1].style.border =
      "solid #F7D382";
  } else if (task.priorityRating === "High") {
    newTaskItem[newTaskItem.length - 1].style.backgroundColor = "#F7D7E7";
    taskCheckboxInput[taskCheckboxInput.length - 1].style.border =
      "solid #EAA0D3";
  }
}

///KANBAN BOARD ---------------------------------------------------------

//render kanban board
function renderKanbanBoard(boardName) {
  let board = document.createElement("div");
  board.setAttribute("class", "boardColumn");
  board.innerHTML += "<div class='boardBarDecoration'>" + "</div>";
  board.innerHTML += "<h4 contenteditable='true'>" + boardName + "</h4>";

  //append the board to the container
  boardContainer.appendChild(board);

  //listeners for added boards
  board.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  board.addEventListener("dragenter", function (event) {
    event.preventDefault();
  });

  board.addEventListener("drop", function (event) {
    this.append(draggedItem);
  });
}

//render kanban card
function renderKanban(task) {
  let card = document.createElement("div");
  card.setAttribute("id", "kanbanCard");
  card.setAttribute("draggable", "true");

  card.innerHTML =
    "<div class = kanbanPriority>" +
    "<p>" +
    task.priorityRating +
    "</p>" +
    "<div>";
  card.innerHTML += "<h5>" + task.taskDescription + "</h5>";
  card.innerHTML +=
    "<p>" +
    "<i class='far fa-calendar-check'>" +
    "</i>" +
    " " +
    task.dueDate +
    " " +
    "(" +
    task.completionTime +
    ")" +
    "</p>";
  card.innerHTML += "<p>" + task.estimatedTime + " " + "min" + "</p>";
  //append the card to the To-Do Board
  toDoColumn.appendChild(card);

  //setting colour of priority div depending on priority rating
  if (task.priorityRating === "Low") {
    kanbanPriority[kanbanPriority.length - 1].style.backgroundColor = "#5598F5";
  } else if (task.priorityRating === "Medium") {
    kanbanPriority[kanbanPriority.length - 1].style.backgroundColor = "#F8BF53";
  } else if (task.priorityRating === "High") {
    kanbanPriority[kanbanPriority.length - 1].style.backgroundColor = "#EB68A9";
  }
  //console.log(kanbanPriority);
}

//add a new board with user inputted board name when user submits the form
kanbanForm.addEventListener("submit", function (event) {
  let boardName = boardNameInput.value;
  event.preventDefault();
  renderKanbanBoard(boardName);
});

//DRAG AND DROP functionality
let draggedItem = null;

/*for (let i = 0; i < cardArray.length; i++){
const cardItem = cardArray[i];*/

//makes the card in original board invisible when start drag
document.body.addEventListener("dragstart", function (event) {
  if (event.target.id == "kanbanCard") {
    draggedItem = event.target;
    console.log("dragstart");
    setTimeout(function () {
      event.target.style.display = "none";
    }, 0);
  }
});

document.body.addEventListener("dragend", function (event) {
  if (event.target.id == "kanbanCard") {
    console.log("dragend");
    setTimeout(function () {
      event.target.style.display = "block";
      draggedItem = null;
    }, 0);
  }
});

for (let j = 0; j < boardColumns.length; j++) {
  const boardColumn = boardColumns[j];

  boardColumn.addEventListener("dragover", function (event) {
    event.preventDefault();
    //console.log("dragover");
  });

  boardColumn.addEventListener("dragenter", function (event) {
    event.preventDefault();
    //console.log("dragenter");
  });

  //append the card to board when dropped
  boardColumn.addEventListener("drop", function (event) {
    //console.log("drop");
    this.append(draggedItem);
  });
}
