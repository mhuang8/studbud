//Variables for HTML elements using DOM selection
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");
var taskInput = document.getElementById("taskInput");
var tasklist = document.getElementById("tasklist");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

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
  let item = document.createElement("li");
  item.setAttribute("id", "newTaskItem");

  item.innerHTML = "<input type=checkbox name=taskCheckbox id=taskCheckboxInput>"
  item.innerHTML += "<label for=taskCheckbox>" + task.taskDescription + "</label>"
  item.innerHTML += "<p>" + task.dueDate + "</p>"
  item.innerHTML += "<p>" + task.completionTime + "</p>"
  item.innerHTML += "<p>" + task.estimatedTime + ' ' + 'min' + "</p>"
  item.innerHTML += "<p>" + task.priorityRating + "</p>"
  
  tasklist.appendChild(item);

  //Extra task DOM elements - further user interaction e.g delete
  let delButton = document.createElement("button")
  
    //create a textNode
  let delButtonText = document.createTextNode("Delete");
    //get the text appended to button element
  delButton.appendChild(delButtonText);
    //append whole button to the item created
  item.appendChild(delButton);

  //Event Listeners for DOM elements
  delButton.addEventListener("click", function(event){
   event.preventDefault();
   item.remove();
  })
  //Clear the input form
  form.reset();
}

///KANBAN BOARD

function renderKanban(task){

}

