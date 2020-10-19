import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil';
import RecoilizeDebugger from 'recoilize';

const root = document.getElementById('root');

ReactDOM.render(
  <RecoilRoot>
    <RecoilizeDebugger />
    <App />
  </RecoilRoot>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();