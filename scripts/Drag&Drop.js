import { getData, syncData } from "./DataStore.js";
import { InitTaskListeners } from "./MainController.js";
import { getTasks, setTasks } from "./TasksStatues.js";
import { UpdateList } from "./UpdateList.js";
import { KEY, TasksListElement } from "./variables.js";

const saveSortedDataToDB = () => {
  const SortedList = document.querySelectorAll(".TaskList__taskContent");
  const tasksNames = [...SortedList];
  let sortedTasksList = [];
  tasksNames.forEach((taskName) => {
    sortedTasksList.push({
      'value': taskName.innerText,
      'isCompleted': taskName.classList.contains("TaskList__taskContent--isActive"),
    });
  });

  setTasks([...sortedTasksList]);
  syncData(KEY, getTasks());
  UpdateList(getData(KEY));
  InitTaskListeners();
};

export const InitDragAndDrop = () => {
  const DragabbleTasksElements = document.querySelectorAll(".TaskList__taskContent");

  DragabbleTasksElements.forEach((DraggedTask) => {
    DraggedTask.addEventListener("dragstart", () => {
      setTimeout(() => DraggedTask.classList.add("dragged"), 0);
    });
    DraggedTask.addEventListener("dragend", () => {
      DraggedTask.classList.remove("dragged");
      saveSortedDataToDB();
    });
  });

  TasksListElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    
    const DraggedTask = TasksListElement.querySelector(".dragged");
    if (!DraggedTask) return;

    const sibilings = [...TasksListElement.querySelectorAll(".TaskList__taskContent:not(.dragged)")];
    const nextSibiling = sibilings.find((sibiling) => {
      return e.clientY <= sibiling.offsetTop + sibiling.offsetHeight / 2;
    });
    
    TasksListElement.insertBefore(DraggedTask, nextSibiling);
  });
};
