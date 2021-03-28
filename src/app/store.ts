import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware, RouterState, connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { useDispatch } from 'react-redux';
import reduxSaga from 'redux-saga';

import counterReducer from '../features/counter/counterSlice';

const sagaMiddleware = reduxSaga();
export const history = createBrowserHistory({ basename: '/test' });
export type State =
    | {
          router: RouterState;
      }
    | undefined;
const middlewares = [sagaMiddleware, routerMiddleware(history), ...getDefaultMiddleware({ thunk: false })];

const store = configureStore({
    reducer: {
        counter: counterReducer,

        router: connectRouter(history),
    },

    devTools: true,
    middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
function* rootSaga() {}

sagaMiddleware.run(rootSaga);

export default store;
