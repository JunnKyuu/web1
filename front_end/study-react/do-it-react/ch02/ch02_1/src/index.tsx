import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const pVirtualDOM = React.createElement('p', null, 'Hello Virtual DOM World!');
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(pVirtualDOM);

reportWebVitals();
