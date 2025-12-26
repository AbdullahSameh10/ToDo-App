import { getData } from "./DataStore.js";
import { AddTask, CompleteTask, DeleteTask, EditTask } from "./ListTasks.js";
import { UpdateList } from "./UpdateList.js";
import { AddTaskBtn, KEY, TaskInput } from "./variables.js";

export const InitAddTasksBtn = () =>
  AddTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    AddTask();
    UpdateList(getData(KEY));
    InitTaskListeners();
    TaskInput.value = "";
  });

export const InitTaskListeners = () => {
  const getDeleteIcons = document.querySelectorAll(".TaskList__deleteIcon");
  getDeleteIcons.forEach((task, index) => {
    task.addEventListener("click", (e) => {
      e.preventDefault();
      DeleteTask(index, task);
    });
    task.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        DeleteTask(index, task);
      }
    });
  });
  //-------------------------------------------//
  const getEditIcons = document.querySelectorAll(".TaskList__editIcon");
  getEditIcons.forEach((task, index) => {
    task.addEventListener("click", (e) => {
      e.preventDefault();
      EditTask(index);
    });
    task.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        EditTask(index);
      }
    });
  });
  //-------------------------------------------//
  const getCompleteBox = document.querySelectorAll(".TaskList__checkbox");
  getCompleteBox.forEach((task, index) => {
    task.addEventListener("click", (e) => {
      e.preventDefault();
      CompleteTask(index);
    });
    task.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        CompleteTask(index);
      }
      if (e.key === "Delete" || e.key === "Backspace") {
        e.preventDefault();
        DeleteTask(index);
      }
    });
  });
};
