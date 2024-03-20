import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #2e2b2b;
    color: #5cffd9;
  }
`

const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
)