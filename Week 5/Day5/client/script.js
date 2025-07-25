const API = "http://localhost:5000";

function addTask() {
  const task = document.getElementById("task-input").value;
  fetch(`${API}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task }),
  }).then(loadTasks);
}

function loadTasks() {
  fetch(`${API}/tasks`)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("task-list");
      list.innerHTML = "";
      data.tasks.forEach(t => {
        const li = document.createElement("li");
        li.textContent = t.task;
        list.appendChild(li);
      });
    });
}

window.onload = loadTasks;
