import React, { useRef } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { productAddAction } from '../../../tools/actions/productAction';
import ProductForm from './ProductForm';

const AddProduct = () => {
    const dispatch = useDispatch();


    return (
        <>
            <h2 className='my-5 text-center'>Add Product</h2>
            <ProductForm formData={(fd) => { dispatch(productAddAction(fd)) }} />

        </>
    )
}

export default AddProduct