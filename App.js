
// selectors

const form = document.querySelector(".new-task-form");
const taskInput = document.getElementById("new-task-input");
const taskList = document.getElementById("tasks");

console.log(form, taskInput, taskList);

form.addEventListener("submit", function (event) {
  // console.log(event);

  // reload off option
  event.preventDefault();

  if (taskInput.value) {
    const task = taskInput.value;
  // console.log(task);


  // creating the task div

  const taskEl = document.createElement("div");
  taskEl.classList.add("task");

  // inserting task element div to tasks div
  taskList.appendChild(taskEl);


  // creating the content div
  const taskElContent = document.createElement("div");
  taskElContent.classList.add("content");

  // inserting content div to task
  taskEl.appendChild(taskElContent);

  // creating the input div
  const taskElInput = document.createElement("input");
  taskElInput.classList.add("text");
  taskElInput.value = task;
  taskElInput.setAttribute("readonly", "readonly");

  // inserting input to content div
  taskElContent.appendChild(taskElInput);

  // creating the Actions div
  const taskElActions = document.createElement("div");
  taskElActions.classList.add("actions");

  // inserting actions div to content div
  taskElContent.appendChild(taskElActions);

  // creating the edit button to Actions div
  const taskElEditbtn = document.createElement("button");
  taskElEditbtn.classList.add("edit");
  taskElEditbtn.innerText = "Edit";

  // creating the Delete button to Actions div
  const taskElDeletebtn = document.createElement("button");
  taskElDeletebtn.classList.add("delete");
  taskElDeletebtn.innerText = "Delete";

  // creating the Complete button to Actions div
  const taskElCompletebtn = document.createElement("button");
  taskElCompletebtn.classList.add("complete");
  taskElCompletebtn.innerText = "Complete";


  // inserting 3 button actions div
  taskElActions.appendChild(taskElEditbtn);
  taskElActions.appendChild(taskElDeletebtn);
  taskElActions.appendChild(taskElCompletebtn);
    
    //clear the input field
    taskInput.value = "";

     // edit btn
    taskElEditbtn.addEventListener("click", function () {
      if (taskElEditbtn.innerText.toLowerCase() === "edit") {
        taskElEditbtn.innerText = "Save";
        taskElInput.removeAttribute("readonly");
        taskElInput.focus();
        // Problem...
      } else {
        taskElEditbtn.innerText = "Edit";
        taskInput.setAttribute("readonly", "readonly");
      }
    });

    // complete btn
    taskElCompletebtn.addEventListener("click", function () {
      if (taskElCompletebtn.innerText.toLowerCase() === "complete") {
        taskElCompletebtn.innerText = "Completed";
        taskElInput.classList.add("mark-complete");
        taskElCompletebtn.style.backgroundColor = "yellow";
        taskElCompletebtn.style.color = "black";
      } else {
        taskElCompletebtn.innerText = "Complete";
        taskElInput.classList.remove("mark-complete");
        
      }
    });


    // delete btn
    taskElDeletebtn.addEventListener("click", function () {
      taskList.removeChild(taskEl);
    });


  } else {
    alert("Enter some text");
  }



});

// document.getElementById("new-task-submit").addEventListener("click", function (event) {
//   console.log("Event hochhe:", event.target.id);
// });






