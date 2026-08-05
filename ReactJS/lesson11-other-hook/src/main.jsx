import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App'
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from 'react-use-cart';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </StrictMode>,
)
