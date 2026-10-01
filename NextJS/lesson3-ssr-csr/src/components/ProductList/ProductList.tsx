
"use client"

import axios from "axios";
import { useEffect, useState } from "react"

const ProductList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/products')
            .then(res => setData(res.data));
    }, [])
    return (
        <div>
            <ul>
                {data.map((item: any) => (

                    <li key={item.id}>{item.model}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList