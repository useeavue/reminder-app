import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';

export const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />}></Route>
		</Routes>
	);
};
