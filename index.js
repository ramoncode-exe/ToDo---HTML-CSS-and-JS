function addTask() {
    const input = document.getElementById("task");
    const textTask = input.value.trim();

    if (textTask === "") {
        alert("Write your tasks!");
        return;
    }

    const li = document.createElement("li");
    li.className = "task-item"; // Classe para o item da tarefa

    const taskContainer = document.createElement("div");
    taskContainer.className = "task-container";

    const checkCircle = document.createElement("div");
    checkCircle.className = "check-circle";

    const taskText = document.createElement("span");
    taskText.textContent = textTask;
    taskText.className = "task-text";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = () => li.remove();

    checkCircle.onclick = () => {
        checkCircle.classList.toggle("checked");
        taskText.classList.toggle("completed");
    };

    taskContainer.appendChild(checkCircle);
    taskContainer.appendChild(taskText);
    
    li.appendChild(taskContainer);
    li.appendChild(removeBtn);

    document.getElementById("listTask").appendChild(li);
    input.value = "";
}