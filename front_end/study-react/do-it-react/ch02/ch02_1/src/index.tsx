import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const pVirtualDOM = React.createElement('p', null, 'Hello Virtual DOM World!');
// virtual DOM 생성

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// virtual DOM 연결할 DOM 설정

root.render(pVirtualDOM);
// virtual DOM 연결

reportWebVitals();
