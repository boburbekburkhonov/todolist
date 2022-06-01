const elForm = document.querySelector(".form");
const elFormInput = document.querySelector(".form-input");
const elFormInputWho = document.querySelector(".form-input-who");
const elList = document.querySelector(".list");
const elBody = document.querySelector("body");
const elButton = document.querySelector(".btn");

const todos = [];
const todosWho = [];

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const inputValue = elFormInput.value.toUpperCase();

  const todo = {
    name: inputValue,
    id: todos.length,
  }

  todos.push(todo);
  elFormInput.value = "";
  elList.innerHTML = null;

  for(let element of todos) {
    const newLi = document.createElement("li");

    newLi.textContent = element.name

    elList.appendChild(newLi);
  }
})


elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const inputValueWho = elFormInputWho.value.toUpperCase();

  const todoWho = {
    name: inputValueWho,
    id: todosWho.length,
  }

  todosWho.push(todoWho);
  elFormInputWho.value = null;


  for(let item of todosWho) {
    const newLiWho = document.createElement("li")

    newLiWho.textContent = item.name;

    elList.appendChild(newLiWho)
  }

  elBody.style.backgroundImage = "none"
  elBody.style.backgroundImage = "url(../images/pman.webp)"

})