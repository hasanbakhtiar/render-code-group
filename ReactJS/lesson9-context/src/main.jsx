import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App'
import { MyProvider } from './context/MyContext';
import { ProductProvider } from './context/ProductContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <MyProvider>
        <App />
      </MyProvider>
    </ProductProvider>
  </StrictMode>,
)
