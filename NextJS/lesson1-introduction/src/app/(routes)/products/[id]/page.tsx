'use client'
import { useParams } from 'next/navigation'

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    return (
        <div>ProductDetails:{id}</div>
    )
}

export default ProductDetails