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
    <a href="#" class="btn btn-secondary" id="edit">Edit</a>
  </div>
</div>`;

  taskListing.appendChild(taskCard);

  taskInput.value = "";
});

taskListing.addEventListener("click", function (event) {
  if (event.target.id == "completed") {
    let card = event.target.closest(".card");
    card.remove();
  }
});
