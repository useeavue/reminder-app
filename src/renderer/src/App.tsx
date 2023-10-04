import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import { SettingsPage } from './pages/settingsPage';

export const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />}></Route>
			<Route path='/settings' element={<SettingsPage />}></Route>
		</Routes>
	);
};
