const inputTask = document.querySelector(".todoSection__addInputTask");
const tasksList = document.querySelector(".todoSection__TasksList");
const addBtn = document.querySelector(".todoSection__addTaskIcon");

let toDosArray = [];

/////////////////////////////////////////////////////////////
///////////                      Functions                  ///////////
/////////////////////////////////////////////////////////////
//==============  Functions ===============>
const addNewToDo = (inputToDoValue) => {
  let newToDoObject = {
    id: toDosArray.length + 1,
    todoTitle: inputToDoValue,
    complete: false,
  };

  toDosArray.push(newToDoObject);
  setLocalStorage(toDosArray);
  todosGenerator(toDosArray);
  inputTask.focus();
};

const setLocalStorage = (todosList) => {
  localStorage.setItem("todoItem", JSON.stringify(todosList));
};

const todosGenerator = (toDosArray) => {
  let newToDoLiElem,
    newIconCheckBoxElem,
    newToDoSpanElem,
    newToDoEditElem,
    newToDoDeleteElem;

  tasksList.innerHTML = "";

  toDosArray.forEach(function (todo) {
    newToDoLiElem = document.createElement("li");
    newToDoLiElem.className =
      "todoSection__TasksItem todoSection__TasksItem--inComplete";

    //  === Create LI Element ===
    newIconCheckBoxElem = document.createElement("i");

    //  === Create Check Box Element ===
    newIconCheckBoxElem.className = "todoSection__checkBoxIcon";

    //  === Create Span Content Element ===
    newToDoSpanElem = document.createElement("span");
    newToDoSpanElem.className = "todoSection__userTaskContent";
    newToDoSpanElem.innerHTML = todo.todoTitle;

    //  === Create Edit Icon Element ===
    newToDoEditElem = document.createElement("iconify-icon");
    newToDoEditElem.setAttribute("icon", "solar:pen-bold");
    newToDoEditElem.classList = "todoSection__editIcon";

    //  === Create Delete Icon Element ===
    newToDoDeleteElem = document.createElement("iconify-icon");
    newToDoDeleteElem.setAttribute("icon", "fluent:delete-16-filled");
    newToDoDeleteElem.classList = "todoSection__removeIcon";
    newToDoDeleteElem.setAttribute("id", todo.id);

    newToDoLiElem.append(
      newIconCheckBoxElem,
      newToDoSpanElem,
      newToDoEditElem,
      newToDoDeleteElem
    );

    tasksList.prepend(newToDoLiElem);
  });
};

const getLocalStorage = () => {
  let localStorageToDos = JSON.parse(localStorage.getItem("todoItem"));

  if (localStorageToDos) {
    toDosArray = localStorageToDos;
  } else {
    toDosArray = [];
  }

  todosGenerator(toDosArray);
};

const removeToDo = (taskId) => {
  let localStorageToDos = JSON.parse(localStorage.getItem("todoItem"));
  toDosArray = localStorageToDos;
  let todoIndex = localStorageToDos.findIndex((todo) => todo.id == taskId);
  toDosArray.splice(todoIndex, 1);
  setLocalStorage(toDosArray);
  todosGenerator(toDosArray);
};

/////////////////////////////////////////////////////////////
///////////                 Events Listener              ///////////
/////////////////////////////////////////////////////////////
//=============  Events Listener =============>
inputTask.addEventListener("keyup", function (e) {
  let inputToDoValue = inputTask.value.trim();
  if (e.keyCode === 13) {
    if (inputToDoValue) {
      addNewToDo(inputToDoValue);
      inputTask.value = "";
    } else {
      inputTask.value = "";
    }
  }
});

addBtn.addEventListener("click", function () {
  let inputToDoValue = inputTask.value.trim();
  if (inputToDoValue) {
    addNewToDo(inputToDoValue);
    inputTask.value = "";
  } else {
    inputTask.value = "";
  }
});

tasksList.addEventListener("click", function (e) {
  if (e.target.classList.contains("todoSection__removeIcon")) {
    let taskId = e.target.id;
    removeToDo(taskId);
  }
});

window.addEventListener("load", getLocalStorage);
