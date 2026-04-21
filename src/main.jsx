import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextApiState from './context/ContextApiState.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { SnackbarProvider } from './Components/Snackbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
<GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENTID}>
 <ContextApiState>
<SnackbarProvider>
    <App />
  </SnackbarProvider>  
    </ContextApiState>
</GoogleOAuthProvider>
   
    </BrowserRouter>
  </StrictMode>,
)
