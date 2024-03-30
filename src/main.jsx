import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import App from './App.jsx'
import StateProvider from './components/StateProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider>
        <App />
    </StateProvider>
  </React.StrictMode>,
)
