import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [singleProduct, setSingleProduct] = useState([]);
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setSingleProduct(res.data))
    }, []);


    return (

        <>
            {!singleProduct ? "Loading..." : <div className="container col-xxl-8 px-4 py-5">

                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

                    <div className="col-10 col-sm-8 col-lg-6">

                        <img
                            src={singleProduct.image}
                            className="d-block mx-lg-auto img-fluid"
                            alt="Bootstrap Themes"
                            width={300}
                            loading="lazy"
                        />
                    </div>
                    <div className="col-lg-6">

                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                            {singleProduct.title}
                        </h1>
                        <p className="lead">
                            {singleProduct.description}
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">

                            <Link to={"/products"} type="button" className="btn btn-outline-dark btn-lg px-4 me-md-2">
                                Back
                            </Link>
                            <button type="button" className="btn btn-outline-primary btn-lg px-4">
                                Add to cart
                            </button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                                ${singleProduct.price}
                            </button>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default ProductDetails