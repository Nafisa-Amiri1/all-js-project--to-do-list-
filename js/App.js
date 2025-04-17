const taskinput = document.getElementById('taskinput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskinput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li")
    li.textContent = taskText;

    li.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskinput.value = "";
}