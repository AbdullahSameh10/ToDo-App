export const getData = (key) => {
  if (key === "darkMode") {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } else return JSON.parse(localStorage.getItem(key)) || [];
};

export const syncData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
