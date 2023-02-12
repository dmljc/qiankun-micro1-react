import './public-path.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

function render(props) {
  const { container } = props;
  ReactDOM.render(<BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/micro-app1' : '/'}><App /></BrowserRouter>, container ? container.querySelector('#root') : document.querySelector('#root'));
}


if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}


export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();


// 宁波 vue angular
