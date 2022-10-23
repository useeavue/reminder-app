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
		addReminder: (state, action: PayloadAction<Reminder>) => {
			state.list.push({
				...action.payload,
				id: state.list.length + 1,
			});
		},
		deleteReminder: (state, action: PayloadAction<number>) => {
			state.list = state.list.filter(item => item.id !== action.payload);
		},
	},
});

export const { addReminder, deleteReminder } = reminderState.actions;

export default reminderState.reducer;
