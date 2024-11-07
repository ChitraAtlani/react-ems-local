import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom';
import './index.css'
import App from './App.jsx'
import AuthProvider from './contetxt/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  // wraping up the context to whole pages to show effective methods inside
  <StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </StrictMode>,
)
