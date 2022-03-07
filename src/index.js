import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';
import { Global } from './styled-components/Global';


ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Global />
			<Routes>
				<Route path='/*' element={<App />} />
			</Routes>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);

