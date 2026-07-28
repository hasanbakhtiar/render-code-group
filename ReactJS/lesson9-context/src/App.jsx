import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./layouts/Header"
import { Container } from "react-bootstrap"
import Footer from "./layouts/Footer"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import { ProductProvider } from "./context/ProductContext"



const App = () => {
  return (
    <BrowserRouter>
        <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<ProductDetails />}></Route>
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App