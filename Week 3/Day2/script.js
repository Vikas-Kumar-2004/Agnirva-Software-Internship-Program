const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// ADD task
addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text === "") {
        alert("Please enter a task!"); return;
    }

    const li = document.createElement("li");
    li.textContent = text;

    // DELETE button
    const del = document.createElement("button");
    del.textContent = "Delete";
    del.style.cssText = "background:#FF4C4C;color:#fff;border:none;cursor:pointer";
    del.addEventListener("click", () => taskList.removeChild(li));

    li.appendChild(del);
    taskList.appendChild(li);
    taskInput.value = "";
});

// BONUS: cross‑off completed tasks
taskList.addEventListener("click", e => {
    if (e.target.tagName === "LI") {
        e.target.style.textDecoration =
            e.target.style.textDecoration === "line-through" ? "none" : "line-through";
    }
});
