import { InitDragAndDrop } from "./Drag&Drop.js";
import { TasksListElement, toggleCompletedTasksBtn } from "./variables.js";


toggleCompletedTasksBtn.addEventListener('click', () => {
  TasksListElement.classList.toggle("TaskList__list--hideCompleted");
  toggleCompletedTasksBtn.classList.toggle("TaskList__link--isActive");
});

export const UpdateList = (tasks) => {  
  if(!tasks.length){
    TasksListElement.innerHTML = `<li class='EmptyList'>
                                    <img class='EmptyList__img' src="./assets/icon-empty.svg" alt="list is empty" />
                                    <p>قائمة المهام فارغة</p>
                                  </li>`;
    return;
  }
  TasksListElement.innerHTML = "";

  tasks.forEach((task) => {
    TasksListElement.innerHTML += `<li class="TaskList__taskContent ${task.isCompleted && "TaskList__taskContent--isActive"}" draggable="true">
                                     <i class="dragIcon uil-draggabledots"></i>
                                     <div class='TaskList__checkbox' tabindex="0" role="button">
                                       <img class='TaskList__checkboxImg' src="./assets/icon-checkmark.svg" alt="checkmark" />
                                     </div>
                                     <div class='TaskList__valueContent'>
                                       <p class='TaskList__value'>
                                       ${task.value}
                                       </p>
                                       <img src=".\\assets\\icon-edit.svg"
                                       class='TaskList__editIcon'
                                       alt="edit-icon"
                                       tabindex="0" 
                                       role="button"
                                       />
                                       <img src=".\\assets\\icon-basket.svg"
                                       class='TaskList__deleteIcon'
                                       alt="basket-icon"
                                       tabindex="0" 
                                       role="button"
                                       />
                                     </div>
                                   </li>`;
  });
  InitDragAndDrop();
};
