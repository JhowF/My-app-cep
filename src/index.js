import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import GlobalStyle from '../components/Styles/GlobalStyle';
import { GlobalStyle } from './Styles/Globalstyle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <GlobalStyle/>
    </>
  
);


