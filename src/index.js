import React from 'react'; // Imports React module
import ReactDOM from 'react-dom'; // Imports module that allows React to use Virtual DOM
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css'; // Can have different CSS files for each component
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers.js'
import 'tachyons';
import App from './Containers/App';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root')); // Renders 'App' at the 'root' element.
registerServiceWorker();
