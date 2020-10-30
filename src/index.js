import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { GlobalStyle } from './WeatherCard/WrapElements';



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>

  </BrowserRouter>,
  document.getElementById('root')
);

store.subscribe(() => console.log(store.getState()));