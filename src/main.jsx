import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: poppinsItalic;
    src: url(./src/assets/fonts/Poppins-Italic.ttf);
  }

  @font-face {
    font-family: poppinsBold;
    src: url(./src/assets/fonts/Poppins-Bold.ttf);
  }

  @font-face {
    font-family: poppinsExtraBoldItalic;
    src: url(./src/assets/fonts/Poppins-ExtraBoldItalic.ttf);
  }

  body {
    margin: 0;
    padding: 0;
  }
`


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
