import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      title: "Shopping",
      items: ["Buy Potato!", "Buy vibrator...", "Sell urself"],
    },
    { title: "B", items: ["Buy Potato!", "Sell urself"] },
    {
      title: "N",
      items: ["Buy Potato!", "Buy vibrator...", "Sell urself", "Buy Potato!"],
    },
    { title: "M", items: ["Buy Potato!", "Buy vibrator...", "sorry..."] },
  ],
  currentFormTitleValue: "",
  isCreated: true,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setCurrentFormTitleValue(state, action) {
      state.currentFormTitleValue = action.payload;
    },
    createNewTask(state) {
      if (state.currentFormTitleValue === "") {
        return;
      }
      state.tasks.push({
        title: state.currentFormTitleValue,
        items: [],
        id: state.tasks.length + 1,
      });
      state.currentFormTitleValue = "";
      state.isCreated = true;
    },
    getForm(state) {
      state.isCreated = !state.isCreated;
    },
    deleteSomeTasks(state, action) {
      state.tasks = state.tasks.filter((value) => value !== action.payload);
      debugger;
    },
  },
});

export const {
  setCurrentFormTitleValue,
  createNewTask,
  getForm,
  deleteSomeTasks,
} = formSlice.actions;
export default formSlice.reducer;
