import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { setupStore } from './store/store';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={setupStore()}>
			<ChakraProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ChakraProvider>
		</Provider>
	</React.StrictMode>
);
