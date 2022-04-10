import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './App2';


/**
 * 学習に応じて読み込むAppファイルを変える
 * App: ルーティング
 * App2: Atomic Design(Componentを使った設計技法)
 */
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <App2 />
  </React.StrictMode>,
  document.getElementById('root')
);
