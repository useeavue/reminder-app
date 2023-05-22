import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { SettingsPage } from './pages/SettingsPage';

export const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />}></Route>
			<Route path='/settings' element={<SettingsPage />}></Route>
		</Routes>
	);
};
