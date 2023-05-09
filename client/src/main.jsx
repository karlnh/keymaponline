import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './styles/index.css'

const buttons = document.getElementsByTagName("button");
console.log(buttons);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
