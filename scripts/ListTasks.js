import { getData, syncData } from "./DataStore";
import { InitTaskListeners } from "./MainController";
import { AddTaskToVar, DeleteTaskFromVar, EditTaskInVar } from "./VarsController";
import { getTasks, setTasks } from "./TasksStatues";
import { UpdateList } from "./UpdateList";
import { KEY, PopupWindow, TaskInput } from "./variables";
import { InitThePopup, showToast } from "./PopupController";


export const AddTask = () => {
  const TaskName = TaskInput.value;

  if (!TaskName.trim()) {
    showToast("برجاء ادخال المهمة اولاً ❗");
    return;
  }

  let task = {
    value: TaskName,
    isCompleted: false,
  };

  setTasks(AddTaskToVar(getTasks(), task));
  syncData(KEY, getTasks());

  showToast("تم إضافة المهمة بنجاح ✅");
};

export const CompleteTask = (index) => {
  const tasks = getData(KEY);
  tasks[index].isCompleted = !tasks[index].isCompleted;
  setTasks(tasks);
  syncData(KEY, tasks);
  UpdateList(getData(KEY));
  InitTaskListeners();
};

export const EditTask = async (index, task) => {
  PopupWindow.classList.add("active");

  const editedtask = await InitThePopup("edit", task);
  
  if (!editedtask) {
    PopupWindow.classList.remove("active");
    return;
  }

  setTasks(EditTaskInVar(getTasks(), index, editedtask));
  syncData(KEY, getTasks());
  
  UpdateList(getData(KEY));
  InitTaskListeners();
  showToast("تم تعديل المهمة بنجاح ✅");
  PopupWindow.classList.remove("active");
};

export const DeleteTask = async (index, task) => {
  PopupWindow.classList.add("active");

  const action = await InitThePopup("delete", task);
  
  if (!action) {
    PopupWindow.classList.remove("active");
    return;
  }

  setTasks(DeleteTaskFromVar(getTasks(), index));
  syncData(KEY, getTasks());
  
  UpdateList(getData(KEY));
  InitTaskListeners();
  showToast("تم حذف المهمة بنجاح ✅");
  PopupWindow.classList.remove("active");
};
