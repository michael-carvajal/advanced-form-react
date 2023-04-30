import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import PageProvider from './components/Context/PageContext';
import SampleSurveyProvider from './components/Context/SampleSurveyContext';

const Root = () => {
  return (
    <SampleSurveyProvider>

    <PageProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </PageProvider>
    </SampleSurveyProvider>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
