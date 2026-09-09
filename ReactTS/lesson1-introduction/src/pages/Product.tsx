import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import type { productItemType } from "../types/product.type";
import axios from "axios";




const Product = () => {
    const [productData, setProductData] = useState<productItemType[]>();

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setProductData(res.data));
    }, []);

    return (
        <div className="container">
            <h1 className="my-5 text-center">Product List</h1>
            <div className="row g-3">
                {productData?.map((item: productItemType) => (
                    <ProductCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Product