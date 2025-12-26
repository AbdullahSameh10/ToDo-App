import { PopupWindow } from "/variables.js";

export const InitThePopup = (action, task) => {
  return new Promise((resolve) => {
    if (action === "delete") {
      PopupWindow.innerHTML = `
                                <div class="popup__card">
                                  <h2>تأكيد</h2>
                                  <p>هل أنت متأكد أنك تريد حذف هذه المهمة؟</p>
                                  <p>${task.parentElement.textContent}</p>
                                  <div class="btns-container">
                                    <button class="confirm-btn btn" tabindex="0">حذف</button>
                                    <button class="cancel-btn btn" tabindex="0">إلغاء</button>
                                  </div>
                                </div>
                              `;

      const confirmDeleting = PopupWindow.querySelector(".confirm-btn");
      const cancelDeleting = PopupWindow.querySelector(".cancel-btn");

      confirmDeleting.addEventListener("click", () => resolve(true));
      cancelDeleting.addEventListener("click", () => resolve(false));

      confirmDeleting.focus();

    }
    else if (action === "edit") {
      PopupWindow.innerHTML = `<div class="popup__card">
                                 <h2>تعديل المهمة</h2>
                                 <input
                                   class="popup__input"
                                   type="text"
                                   placeholder="اكتب اسم المهمة"
                                 />

                                 <div class="btns-container">
                                   <button class="edit-btn btn">تعديل</button>
                                   <button class="cancel-btn btn">إلغاء</button>
                                 </div>
                               </div>
                              `;

      const confirmEditing = PopupWindow.querySelector(".edit-btn");
      const cancelEditing = PopupWindow.querySelector(".cancel-btn");
      const EditedTask = PopupWindow.querySelector(".popup__input");


      EditedTask.addEventListener('keydown', (e) => {
        if(e.key === "Enter"){
          const EditedTaskValue = EditedTask.value;
          EditedTaskValue.trim()? resolve(EditedTaskValue):showToast("برجاء ادخال المهمة اولاً ❗");
        }
      });
      confirmEditing.addEventListener("click", () => {
        const EditedTaskValue = EditedTask.value;
        EditedTaskValue.trim()? resolve(EditedTaskValue):showToast("برجاء ادخال المهمة اولاً ❗");
      });
      cancelEditing.addEventListener("click", () => resolve(false));

      EditedTask.focus();

    }
  });
};

export const showToast = (message, duration = 2500) => {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("showAlert");
  
  setTimeout(() => {
    toast.classList.remove("showAlert");
    toast.textContent = '';
  }, duration);
};
