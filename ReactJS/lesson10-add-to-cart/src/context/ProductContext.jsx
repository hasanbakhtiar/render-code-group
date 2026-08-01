import axios from "axios";
import {  createContext, useEffect, useState } from "react";

export const ProductContext = createContext();


export const ProductProvider = ({ children }) => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, []);


    return <ProductContext.Provider value={[product, setProduct]}>
        {children}
    </ProductContext.Provider>
}