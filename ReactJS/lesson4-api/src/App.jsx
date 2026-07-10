import axios from "axios";
import { useEffect, useState } from "react"

const App = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then(res => setProduct(res.data))
    }, [])

    return (
        <div>
            {product.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </div>
    )
}

export default App