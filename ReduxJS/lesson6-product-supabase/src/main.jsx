import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App';
import configureStore from './tools/store/configureStore';
import { getProductAction, productAddAction } from './tools/actions/productAction';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { supabase } from './utils/supabase';
import { getCategoryAction } from './tools/actions/categoryAction';

const store = configureStore();

async function getDataProduct() {
  const { data, error } = await supabase.from('products').select();
  if (error) {
    console.log(error);
  } else {
    store.dispatch(getProductAction(data));
  }
};

getDataProduct();

async function getDataCategory() {
  const { data, error } = await supabase.from('category').select();
  if (error) {
    console.log(error);
  } else {
    store.dispatch(getCategoryAction(data));
  }
};

getDataCategory();






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Provider>
  </StrictMode>,
)
