const handleSubmit = function (e) {
  //per prevenire il reset all'invio
  e.preventDefault();
  addTask();
  attachComplete();
  attachDelete();
};

// creo la funzione addTask
const addTask = function () {
  //seleziono il div con l'id tasks
  let tasks = document.querySelector("#tasks");
  //seleziono l'input con l'id nuova task
  let inputField = document.querySelector("#nuovaTask input");
  //il div task che viene creato avra una classe task, lo span con un id taskname e un bottone con classe delete
  let nuovaTask = `
        <div class="task">
            <span id="taskname">
                ${inputField.value}
            </span>
            <button class="delete">
            <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
  //inserisco il il div nell'html
  tasks.innerHTML += nuovaTask;
  //questo valore vuoto cambiera con il valore che noi immettiamo nell'input
  inputField.value = "";
};

//funzione per la barra al click (per dire che è stato completato)
const attachComplete = function () {
  //seleziono tutti i div di classe task
  let allTasks = document.querySelectorAll(".task");
  //con un ciclo for ad ogni task gli inserisco una funzione che al click attiva/disattiva la classe completed che nel css ha come proprieta  text-decoration: line-through;
  for (let i = 0; i < allTasks.length; i++) {
    allTasks[i].addEventListener("click", function () {
      this.classList.toggle("completed");
    });
  }
};
//funzione per eliminare il task
const attachDelete = function () {
  // seleziono tutti i bottoni  con la classe delete
  let allDeleteButtons = document.querySelectorAll(".delete");
  //con un ciclo gli inserisco un addEventListener che al click rimuove il suo parentNode (il div)
  for (let i = 0; i < allDeleteButtons.length; i++) {
    allDeleteButtons[i].addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
};

window.onload = function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
};
