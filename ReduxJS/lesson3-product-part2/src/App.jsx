import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './pages/Home'
import Products from './pages/Products'
import Header from './layouts/Header'
import AddProduct from './pages/dashboard/product/AddProduct'
import Dashboard from './pages/dashboard/Dashboard'
import Product from './pages/dashboard/product/Product'
import Category from './pages/dashboard/category/Category'
import AddCategory from './pages/dashboard/category/AddCategory'
import Footer from './layouts/Footer'
import Login from './pages/auth/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>


          <Route path='/login' element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>

          <Route path='/dashboard/product' element={<Product />}></Route>
          <Route path='/dashboard/product/add' element={<AddProduct />}></Route>

          <Route path='/dashboard/category' element={<Category />}></Route>
          <Route path='/dashboard/category/add' element={<AddCategory />}></Route>


        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App