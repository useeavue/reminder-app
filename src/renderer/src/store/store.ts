import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reminderReducer from './slices/reminderSlice';

const rootReducer = combineReducers({ reminder: reminderReducer });

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
