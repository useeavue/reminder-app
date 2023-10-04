import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Reminder } from '@renderer/models/reminder';

export interface ReminderState {
	list: Reminder[];
}

const initialState: ReminderState = {
	list: [],
};

export const reminderState = createSlice({
	name: 'reminder',
	initialState,
	reducers: {
		addReminder: (state, action: PayloadAction<Omit<Reminder, 'id'>>) => {
			state.list.push({
				...action.payload,
				id: state.list.length + 1,
			});
		},
		editReminder: (state, action: PayloadAction<Reminder>) => {
			state.list = state.list.map(item => {
				if (item.id === action.payload.id) {
					return action.payload;
				}
				return item;
			});
		},
		deleteReminder: (state, action: PayloadAction<number>) => {
			state.list = state.list.filter(item => item.id !== action.payload);
		},
		markAsCompleted: (state, action: PayloadAction<number>) => {
			state.list = state.list.map(item => {
				if (item.id === action.payload) {
					return { ...item, completed: true };
				}
				return item;
			});
		},
	},
});

export const { addReminder, editReminder, deleteReminder, markAsCompleted } =
	reminderState.actions;

export default reminderState.reducer;
