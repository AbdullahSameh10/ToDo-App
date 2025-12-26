import { getData, syncData } from "./DataStore";
import { MainContainer, ToggleModeBtn } from "./variables";

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
