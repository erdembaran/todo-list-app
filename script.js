const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".addButton");
const todoList = document.querySelector(".todoList");

const removeListItem = (event) => {
  todoList.removeChild(event.currentTarget.parentElement);
};

const completeListItem = (event) => {
  const { parentElement } = event.currentTarget;

  const isCompleted = [...parentElement.classList].some(
    (className) => className === "completed"
  );

  if (!isCompleted) {
    event.currentTarget.innerText = "Todo";
  } else {
    event.currentTarget.innerText = "Complete";
  }

  event.currentTarget.parentElement.classList.toggle("completed");
};

const renderTodoItem = (todoText) => {
  const todoItem = document.createElement("li");
  todoItem.classList.add(
    "text-light",
    "list-group-item",
    "list-group-flush",
    "d-flex",
    "justify-content-between",
    "pt-3"
  );

  const textElement = document.createElement("p");
  textElement.innerText = todoText;
  textElement.classList.add(
    "textElement",
    "me-auto",
    "text-break",
    "pe-2",
    "text-dark"
  );
  todoItem.appendChild(textElement);

  todoList.appendChild(todoItem);

  todoInput.value = "";
  todoInput.focus();

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("deleteButton", "me-2", "btn", "btn-danger");
  deleteButton.addEventListener("click", removeListItem);
  todoItem.appendChild(deleteButton);

  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  completeButton.classList.add("completeButton", "btn", "btn-success");
  completeButton.addEventListener("click", completeListItem);
  todoItem.appendChild(completeButton);
};

const addButton = () => {
  if (todoInput.value === "") {
    alert("Enter A Task!");
  } else {
    renderTodoItem(todoInput.value);
  }
};

todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addButton();
    event.preventDefault();
  }
});

todoButton.addEventListener("click", addButton);
