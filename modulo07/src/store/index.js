import { createStore } from 'redux';
import root from './modules/root';

const store = createStore(root);

export default store;
