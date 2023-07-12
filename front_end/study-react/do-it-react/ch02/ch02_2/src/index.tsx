import ReactDOM from 'react-dom/client';

const rootVirtualDOM = (
  <ul>
    <li>
      <a href="http://www.google.com" target="_blank">
        <p>Go to Google!</p>
      </a>
    </li>
  </ul>
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(rootVirtualDOM);
