import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
import { produce } from "immer";

const initialState = {
  tasks: [
    {
      title: "Shopping",
      currentFormItemValue: "",
      isCreated: false,
      items: [
        { id: 0, value: "Buy Potato!", done: false },
        { id: 1, value: "Buy vibrator...", done: false },
        { id: 2, value: "Sell urself", done: true },
        { id: 3, value: "Buy Potato!", done: false },
      ],
    },

    {
      title: "B",
      currentFormItemValue: "",
      isCreated: false,
      items: [
        { id: 0, value: "Buy Potato!", done: false },
        { id: 1, value: "Buy vibrator...", done: false },
        { id: 2, value: "Sell urself", done: false },
        { id: 3, value: "Buy Potato!", done: false },
      ],
    },
    {
      title: "N",
      currentFormItemValue: "",
      isCreated: false,
      items: [
        { id: 0, value: "Buy Potato!", done: false },
        { id: 1, value: "Buy vibrator...", done: false },
        { id: 2, value: "Sell urself", done: false },
        { id: 3, value: "Buy Potato!", done: false },
      ],
    },
    {
      title: "M",
      currentFormItemValue: "",
      isCreated: false,
      items: [
        { id: 0, value: "Buy Potato!", done: false },
        { id: 1, value: "Buy vibrator...", done: false },
        { id: 2, value: "Sell urself", done: false },
        { id: 3, value: "Buy Potato!", done: false },
      ],
    },
  ],
  currentFormTitleValue: "",
  isCreated: true,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setCurrentFormTitleValue(state, action) {
      return produce(state, (draft) => {
        draft.currentFormTitleValue = action.payload;
      });
    },

    setCurrentFormItemValue(state, action) {
      return produce(state, (draft) => {
        draft.tasks[action.payload.idList].currentFormItemValue =
          action.payload.event;
        draft.isCreated = false;
      });
    },

    createNewTask(state) {
      return produce(state, (draft) => {
        draft.tasks.push({
          title: draft.currentFormTitleValue,
          currentFormItemValue: "",
          isCreated: false,
          items: [],
        });
        draft.currentFormTitleValue = "";
        draft.isCreated = true;
      });
    },
    createNewItem(state, action) {
      return produce(state, (draft) => {
        const newItem = draft.tasks[action.payload].currentFormItemValue;

        draft.tasks[action.payload].items.push({
          value: newItem,
          done: false,
        });
      });
    },
    getForm(state, action) {
      return produce(state, (draft) => {
        draft.isCreated = action.payload;
      });
    },
    getItemForm(state, action) {
      return produce(state, (draft) => {
        debugger;
        draft.tasks[action.payload.id].isCreated = action.payload.value;
      });
    },
    deleteSomeTasks(state, action) {
      return produce(state, (draft) => {
        draft.tasks.splice(action.payload, 1);
      });
    },
    deleteSomeItems(state, action) {
      return produce(state, (draft) => {
        draft.tasks[action.payload.idList].items.splice([action.payload.id], 1);
        console.log(current(draft.tasks));
      });
    },
    toggleReadiness(state, action) {
      return produce(state, (draft) => {
        draft.tasks[action.payload.idList].items[action.payload.id].done =
          action.payload.done ? false : true;
      });
    },
  },
});

debugger;

export const {
  setCurrentFormTitleValue,
  setCurrentFormItemValue,
  createNewTask,
  createNewItem,
  getForm,
  deleteSomeTasks,
  deleteSomeItems,
  toggleReadiness,
  getItemForm,
} = formSlice.actions;
export default formSlice.reducer;
