export const AddTaskToVar = (tasks, task) => {
    tasks.push(task);
    return tasks;
};

export const DeleteTaskFromVar = (tasks, index) => {
    tasks.splice(index, 1);
    return tasks;
};

export const EditTaskInVar = (tasks, index, newTask) =>{
    tasks[index]["value"] = newTask;
    return tasks;
};