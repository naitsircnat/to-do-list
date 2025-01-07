let createTaskBtn = document.querySelector("#create-task");

let taskListing = document.querySelector("#listing");

let impUrgSec = document.querySelector("#imp-urg");
let urgSec = document.querySelector("#urg");
let impSec = document.querySelector("#imp");
let notImpUrgSec = document.querySelector("#not-imp-urg");

// CREATE AND ADD TASK
createTaskBtn.addEventListener("click", function () {
  let taskInput = document.querySelector("#task-input");

  let taskDescript = taskInput.value;

  let priInput = document.querySelector("#pri");

  let priority = priInput.value;

  let taskCard = document.createElement("div");

  taskCard.innerHTML = `<div class="card my-2 mt-0" style="width: 16rem;">
 <div class="card-body">
   <h5 class="card-text">${taskDescript}</h5>
   <h6 class="card-subtitle mb-2 text-muted fs-6" style= "display:none">${priority}</h6>
   <a href="#" class="btn btn-primary" id="completed">Completed</a>
   <a href="#" class="btn btn-secondary" id="edit" data-bs-toggle="modal" data-bs-target="#edit-form">Edit</a>
 </div>
</div>`;

  if (priority == "Important & Urgent") {
    impUrgSec.appendChild(taskCard);
  } else if (priority == "Urgent, Not Important") {
    urgSec.appendChild(taskCard);
  } else if (priority == "Important, Not Urgent") {
    impSec.appendChild(taskCard);
  } else {
    notImpUrgSec.appendChild(taskCard);
  }

  taskInput.value = "";
});

let currCard = null;

// MARK TASK AS COMPLETED
taskListing.addEventListener("click", function (event) {
  if (event.target.id == "completed") {
    currCard = event.target.closest(".card");
    currCard.remove();
  }
});

// EDIT TASK
taskListing.addEventListener("click", function (event) {
  if (event.target.id == "edit") {
    currCard = event.target.closest(".card");

    // description
    let currDescript = currCard.querySelector(".card-text").textContent;

    let modalDescriptField = document.querySelector("#newDescript");

    modalDescriptField.value = currDescript;

    // priority
    let currPri = currCard.querySelector(".card-subtitle").textContent;

    let modalPriField = document.querySelector("#newPri");

    modalPriField.value = currPri;
  }
});

saveChangesButton = document.querySelector("#save-changes");

saveChangesButton.addEventListener("click", function () {
  // description

  let modalDescriptField = document.querySelector("#newDescript");

  currCard.querySelector(".card-text").textContent = modalDescriptField.value;

  // priority

  let modalPriField = document.querySelector("#newPri");

  let newPriority = modalPriField.value;

  currCard.querySelector(".card-subtitle").textContent = newPriority;

  // sorting

  if (newPriority == "Important & Urgent") {
    impUrgSec.appendChild(currCard);
  } else if (newPriority == "Urgent, Not Important") {
    urgSec.appendChild(currCard);
  } else if (newPriority == "Important, Not Urgent") {
    impSec.appendChild(currCard);
  } else {
    notImpUrgSec.appendChild(currCard);
  }
});

// SHOW/HIDE DEFAULT MESSAGE
// function observeTaskList(container) {
//   const observer = new MutationObserver(() => {
//     const defaultMessage = container.querySelector(".default-msg");

//     if (container.children.length > 1) {
//       defaultMessage.style.display = "none";
//     } else {
//       defaultMessage.style.display = "block";
//     }
//   });

//   observer.observe(container, { childList: true, subtree: true });
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const taskContainers = document.querySelectorAll(".sublist");

//   taskContainers.forEach((container) => {
//     observeTaskList(container);
//   });
// });
