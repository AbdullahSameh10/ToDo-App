import { ToggleMode, GetModeOnStartup} from "/scripts/DarkMode.js";
import { getData } from "/scripts/DataStore";
import { InitAddTasksBtn, InitTaskListeners } from "/scripts/MainController.js";
import { setTasks } from "/scripts/TasksStatues.js";
import { UpdateList } from "/scripts/UpdateList.js";
import { KEY } from "/scripts/variables.js";


UpdateList(getData(KEY));

setTasks(getData(KEY));

ToggleMode();

GetModeOnStartup();

InitAddTasksBtn();


InitTaskListeners();




