import { combineReducers, createStore } from 'redux'
import MainReducer from './main-reducer'

let reducers = combineReducers(
	{
		main: MainReducer,
	}
)

let store = createStore(reducers);

window.store = store.getState();
export default store;