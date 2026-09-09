import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Example from "./pages/Example"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/example" element={<Example />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App