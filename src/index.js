import React from 'react';
import ReactDOM from 'react-dom/client';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import  App  from 'components/App';
import './index.css';
import {Theme} from './components/Theme';


const Global = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global/>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
