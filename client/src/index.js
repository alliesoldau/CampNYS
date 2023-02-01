import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
// import { createStore } from 'redux';
// import rootReducer from './components/Stores/Reducers/Combined';
// import { Provider } from 'react-redux';

import './index.css';

// const store = createStore(
//   rootReducer, 
//   window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// )


ReactDOM.render(
  // <Provider store={store}>
    <Router>
      <App />
    </Router>,
  // </Provider>,
  document.getElementById('root')
);

