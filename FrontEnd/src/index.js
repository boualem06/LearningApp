import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import  CurrentUserReducer  from './features/currentUser';
import ConversationReducer from './features/ConversationSlice';
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    conversation: ConversationReducer,
    currentuser:CurrentUserReducer
  },
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);

reportWebVitals();
