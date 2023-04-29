import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import PageProvider from './components/Context/PageContext';

const Root = () => {
  return (
    <PageProvider>

    <BrowserRouter>
      <App />
    </BrowserRouter>
    </PageProvider>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
