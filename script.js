let createTaskBtn = document.querySelector("#create-task");

let taskListing = document.querySelector("#listing");

createTaskBtn.addEventListener("click", function () {
  let taskInput = document.querySelector("#task-input");

  let taskDescript = taskInput.value;

  let taskCard = document.createElement("div");

  taskCard.innerHTML = `<div class="card my-2" style="width: 18rem;">
 <div class="card-body">
   <p class="card-text">${taskDescript}</p>
   <a href="#" class="btn btn-primary" id="completed">Completed</a>
   <a href="#" class="btn btn-secondary" id="edit" data-bs-toggle="modal" data-bs-target="#edit-form">Edit</a>
 </div>
</div>`;

  let priInput = document.querySelector("#pri");

  let priority = priInput.value;

  let impUrgSec = document.querySelector("#imp-urg");
  let urgSec = document.querySelector("#urg");
  let impSec = document.querySelector("#imp");
  let notImpUrgSec = document.querySelector("#not-imp-urg");

  if (priority == "imp-urg") {
    impUrgSec.appendChild(taskCard);
  } else if (priority == "urg") {
    urgSec.appendChild(taskCard);
  } else if (priority == "imp") {
    impSec.appendChild(taskCard);
  } else {
    notImpUrgSec.appendChild(taskCard);
  }

  taskInput.value = "";
});

let currCard = null;

taskListing.addEventListener("click", function (event) {
  if (event.target.id == "completed") {
    currCard = event.target.closest(".card");
    currCard.remove();
  }
});

taskListing.addEventListener("click", function (event) {
  if (event.target.id == "edit") {
    currCard = event.target.closest(".card");
    let currDescript = currCard.querySelector(".card-text").textContent;

    let modalDescriptField = document.querySelector("#newDescript");

    modalDescriptField.value = currDescript;
  }
});

saveChangesButton = document.querySelector("#save-changes");

saveChangesButton.addEventListener("click", function () {
  let modalDescriptField = document.querySelector("#newDescript");

  currCard.querySelector(".card-text").textContent = modalDescriptField.value;
});

/*
PULLING CARD DATA INTO FORM
- After clicking edit, pull description from current card into description field in the form  

UPDATING CARD DATA WITH FORM
- After clicking "save changes", pull description from form into the card
*/

// taskListing.addEventListener("click", function (event) {
//   if (event.target.id == "save-changes") {
//     let card = event.target.closest(".card");
//     let descript = card.querySelector(".card-text");

//     let updatedDescript = document.querySelector("#newDescript").value;

//     descript.innerHTML = updatedDescript;
//   }
// });
