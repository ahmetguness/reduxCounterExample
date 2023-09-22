// App.js
import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
