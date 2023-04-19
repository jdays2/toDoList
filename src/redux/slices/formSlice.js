import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
import { produce } from "immer";

const initialState = {
	tasks: [],
	currentFormTitleValue: "",
	isCreated: false,
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
				// draft.isCreated = false;
			});
		},

		createNewTask(state) {
			return produce(state, (draft) => {
				if (draft.currentFormTitleValue === "") {
					return;
				}
				draft.tasks.push({
					title: draft.currentFormTitleValue,
					currentFormItemValue: "",
					isCreated: false,
					items: [],
				});
				draft.currentFormTitleValue = "";
				// draft.isCreated = true;
			});
		},
		createNewItem(state, action) {
			return produce(state, (draft) => {
				if (draft.tasks[action.payload].currentFormItemValue === "") {
					return;
				}
				const newItem = draft.tasks[action.payload].currentFormItemValue;
				draft.tasks[action.payload].items.push({
					value: newItem,
				});
				draft.tasks[action.payload].currentFormItemValue = "";
			});
		},
		changeItemValue(state, action) {
			debugger;
			state.tasks[action.payload.idList].items[action.payload.id] =
				action.payload.value;
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
		// toggleReadiness(state, action) {
		// 	return produce(state, (draft) => {
		// 		draft.tasks[action.payload.idList].items[action.payload.id].done =
		// 			action.payload.done ? false : true;
		// 	});
		// },
	},
});

debugger;

export const {
	changeItemValue,
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
