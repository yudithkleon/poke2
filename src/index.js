import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './Routers/AppRouters';
import {Provider} from 'react-redux'
import {store} from './Components/Reducers/store'



ReactDOM.render(
    <Provider store={store}>
    <AppRouters/>
  </Provider>,
  document.getElementById('root')
);

