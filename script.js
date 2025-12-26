import { ToggleMode, GetModeOnStartup} from "scripts/DarkMode";
import { getData } from "scripts/DataStore";
import { InitAddTasksBtn, InitTaskListeners } from "scripts/MainController";
import { setTasks } from "scripts/TasksStatues";
import { UpdateList } from "scripts/UpdateList";
import { KEY } from "scripts/variables";


UpdateList(getData(KEY));

setTasks(getData(KEY));

ToggleMode();

GetModeOnStartup();

InitAddTasksBtn();


InitTaskListeners();
