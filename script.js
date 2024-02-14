// Initialize tasks array from local storage
var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

document
  .getElementById("todoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var todoInput = document.getElementById("todoInput");
    var task = todoInput.value;

    if (task.trim() !== "") {
      if (tasks.length == 0) {
        document.getElementById("todoList").innerText = "";
      }
      console.log(tasks.length);
      tasks.push(task);
      addTask(task);
      todoInput.value = "";
      saveTasksToLocalStorage(); // Save tasks to local storage
    }
  });

function addTask(task) {
  var todoList = document.getElementById("todoList");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  var label = document.createElement("label");
  label.textContent = task;
  var taskItem = document.createElement("div");

  taskItem.appendChild(checkbox);
  taskItem.appendChild(label);
  todoList.appendChild(taskItem);
}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
  var todoList = document.getElementById("todoList");
  var todoInput = document.getElementById("todoInput");
  todoList.innerHTML = ""; // Clear previous tasks

  if (tasks.length == 0) {
    document.getElementById("todoList").innerText = "Hooray! All Cleared.";
    var todoInput = document.getElementById("todoInput");
    todoInput.placeholder = " + Ready to add something?";
  } else {
    todoInput.placeholder = "+ what to do?";
  }

  tasks.forEach(function (task) {
    addTask(task);
  });
}

function deleteTasks() {
  localStorage.setItem("tasks", JSON.stringify(""));
  window.location.reload();
}

displayTasks();
