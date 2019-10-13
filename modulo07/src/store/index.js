import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import root from './modules/root';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(root, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
