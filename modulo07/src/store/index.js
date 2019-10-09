import { createStore } from 'redux';
import root from './reducers/root';

const store = createStore(root);

export default store;
