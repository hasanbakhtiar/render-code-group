import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App';
import configureStore from './tools/store/configureStore';
import { productAddAction } from './tools/actions/productAction';
import { Provider } from 'react-redux';

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(productAddAction(
  { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYn0PUaL3AZ81hzfZkM2TUOpixCAfDy87IwCTD4VFmEQ&s=10", title: "Asus Zenbook", price: "2700", description: "Slim book" }
));

store.dispatch(productAddAction(
  { id: 2, image: "https://dlcdnwebimgs.asus.com/files/media/8B74E7EE-B66A-4420-894E-3C3B980312EE/v2/img/design/color/strix-g-2022-pink.png", title: "Asus Rog", price: "4700", description: "Gaming Laptop" }
));

store.dispatch(productAddAction(
  { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdDDa3lUSbHCQN1A3pCu7-tlx82gEhX7N4PndH4E60u0AHH-g5ABv_EVQ&s=10", title: "Acer Aspirce", price: "1200", description: "Office laptop" }
));


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
