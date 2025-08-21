document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required!";
        valid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Enter a valid email!";
        valid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }
    const message = document.getElementById("message").value.trim();
    if (message === "") {
        document.getElementById("messageError").innerText = "Message cannot be empty!";
        valid = false;
    } else {
        document.getElementById("messageError").innerText = "";
    }
    if (valid) {
        alert("Form submitted successfully!");
        this.reset();
    }
});
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();
    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }
    const li = document.createElement("li");
    li.innerHTML = `${taskValue} <button onclick="removeTask(this)">❌</button>`;
    document.getElementById("todoList").appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}
