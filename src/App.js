import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import { Routes } from './Routes';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';

// Create a Store from the Configuration, we can pass a Initial State here
const store = configureStore()

const App = (props) => {
  return (
    <Provider store={store} >
      <Routes />
    </Provider>
  )
}

export default App;