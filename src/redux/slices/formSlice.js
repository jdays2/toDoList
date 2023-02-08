import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      title: "Shopping",
      items: [
        { id: 0, value: "Buy Potato!" },
        { id: 1, value: "Buy vibrator..." },
        { id: 2, value: "Sell urself" },
        { id: 3, value: "Buy Potato!" },
      ],
    },
  ],

  //   {
  //     title: "B",
  //     items: [
  //       { id: 0, value: "Buy Potato!" },
  //       { id: 1, value: "Buy vibrator..." },
  //       { id: 2, value: "Sell urself" },
  //       { id: 3, value: "Buy Potato!" },
  //     ],
  //   },
  //   {
  //     title: "N",
  //     items: [
  //       { id: 0, value: "Buy Potato!" },
  //       { id: 1, value: "Buy vibrator..." },
  //       { id: 2, value: "Sell urself" },
  //       { id: 3, value: "Buy Potato!" },
  //     ],
  //   },
  //   {
  //     title: "M",
  //     items: [
  //       { id: 0, value: "Buy Potato!" },
  //       { id: 1, value: "Buy vibrator..." },
  //       { id: 2, value: "Sell urself" },
  //       { id: 3, value: "Buy Potato!" },
  //     ],
  //   },
  // ],
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
      });
      state.currentFormTitleValue = "";
      state.isCreated = true;
    },
    getForm(state) {
      state.isCreated = !state.isCreated;
    },
    deleteSomeTasks(state, action) {
      state.tasks = state.tasks.filter((_, i) => i !== action.payload);
    },
    deleteSomeItems(state, action) {
      alert(action.payload);
    },
  },
});

debugger;

export const {
  setCurrentFormTitleValue,
  createNewTask,
  getForm,
  deleteSomeTasks,
  deleteSomeItems,
} = formSlice.actions;
export default formSlice.reducer;
