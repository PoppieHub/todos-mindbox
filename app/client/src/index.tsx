import React from 'react';
import ReactDOM from 'react-dom/client';
import {Todos} from './containers/';

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Todos />
  </React.StrictMode>
);