let input = document.getElementById("Task");
let addbtn = document.getElementById("add");
let taskContainer = document.getElementById("taskContainer");
addbtn.addEventListener("click", () => {
  if (input.value == "") {
    alert("You must need to enter your task");
  } else {
    // defining elements
    let task = document.createElement("div");
    task.id = "task";
    let yourTask = document.createElement("input");
    yourTask.type = "text";
    yourTask.value = input.value;
    yourTask.id = "yourTask";
    yourTask.readOnly = true;
    task.appendChild(yourTask);
    let editBtn = document.createElement("button");
    editBtn.id = "edit";
    editBtn.textContent = "Edit";
    task.appendChild(editBtn);
    let dltBtn = document.createElement("button");
    dltBtn.id = "dlt";
    dltBtn.textContent = "Delete";
    task.appendChild(dltBtn);
    taskContainer.appendChild(task);
    // Edit btn event listener
    editBtn.addEventListener("click", (e) => {
      if (e.target.textContent == "Done") {
        yourTask.readOnly = true;
        e.target.textContent = "Edit";
      } else if (e.target.textContent == "Edit") {
        yourTask.readOnly = false;
        e.target.textContent = "Done";
      }
    });
    // Delete btn event listener
    dltBtn.addEventListener("click", () => {
      if (
        prompt(
          `Are you sure you want to remove '${dltBtn.parentElement.firstElementChild.value}' task? (Y/N)`
        ) == "Y"
      ) {
        taskContainer.removeChild(dltBtn.parentElement);
      }
    });
  }
});
