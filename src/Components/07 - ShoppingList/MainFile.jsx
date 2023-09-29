import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../1002 - Axios Concepts/UserReducer.jsx';
import ShoppingListReducer from './ShoppingLIstReducer.jsx';

const store = configureStore({
  reducer: {
    user: UserReducer,
    shoppingList: ShoppingListReducer,
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
