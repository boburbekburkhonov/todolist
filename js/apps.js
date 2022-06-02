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
  const inputValueWho = elFormInputWho.value.toUpperCase();

  const todo = {
    name: inputValue,
    who: inputValueWho,
    id: todos.length,
  }

  todos.push(todo);
  elFormInput.value = "";
  elList.innerHTML = null;

  for(let element of todos) {
    const newLi = document.createElement("li");

    newLi.textContent = `${element.name} ${element.who}`

    elList.appendChild(newLi);
  }

  elBody.style.backgroundImage = "none"
  elBody.style.backgroundImage = "url(../images/pman.webp)"
})
