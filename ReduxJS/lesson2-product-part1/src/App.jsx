import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Header from './layouts/Header'
import { Container } from 'react-bootstrap'
import AddProduct from './pages/dashboard/AddProduct'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/dashboard/product/add' element={<AddProduct />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App