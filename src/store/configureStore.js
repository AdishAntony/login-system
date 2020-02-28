import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
//Redux Thunk need to be added as a middleware
import thunkMiddleware from 'redux-thunk';

// Configuring the Store. PreloadState is the initial State.
export function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware
    )
  )
}