import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App'
import AppProvider from './context/provider'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
)
