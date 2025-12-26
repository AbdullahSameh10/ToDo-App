import { getData, syncData } from "./DataStore.js";
import { MainContainer, ToggleModeBtn } from "./variables.js";

const toggleModeFunction = () => {
  MainContainer.classList.toggle("App--isDark");
  syncData("darkMode", MainContainer.classList.contains("App--isDark"));
};

export const ToggleMode = () => {
  ToggleModeBtn.addEventListener("click", toggleModeFunction);
};
export const GetModeOnStartup = () => {
  getData("darkMode") && toggleModeFunction();
};
