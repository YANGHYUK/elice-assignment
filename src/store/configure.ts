import { createStore, applyMiddleware, /* compose, */ combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as modules from '@store/modules';
import rootSaga from '@store/sagas';

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers(modules);
const middlewares = [sagaMiddleware];

// 개발 모드일 때만 Redux Devtools 적용
// const isDev = process.env.NODE_ENV === 'development';
// const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// const composeEnhancers = devtools || compose;

// preloadedState는 추후 서버사이드 렌더링이 되었을 때 전달 받는 초기 상태

/* const configure = preloadedState => {
    const store = createStore(
        reducers,
        preloadedState,
        composeEnhancers(applyMiddleware(...middlewares)),
    );
    sagaMiddleware.run(rootSaga);
    return store;
}; */

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga);

export default store;
