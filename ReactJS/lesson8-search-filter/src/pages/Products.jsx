import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import SingleCard from '../components/SingleCard';
import { ClimbingBoxLoader } from 'react-spinners';

const categories = ["men's clothing", "jewelery","electronics","women's clothing"]

const Products = () => {
    const [product, setProduct] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => setProduct(res.data))

    }, [])
    console.log(product);

    const selectCategory = (cat) => {
        const result = product.filter(p => p.category === cat);
        setFilteredData(result);

    }


    return (
        <>
            <h1 className='mt-5 text-center'>Products List</h1>
            <Row>
                <Col md={3}>
                    <ul className="list-group">
                        {categories.map((item, index) => (
                            <li key={index} onClick={() => { selectCategory(item) }} className="list-group-item">{item}</li>

                        ))}
                    </ul>
                </Col>
                <Col md={9}> <Row className='mt-5 g-4'>
                    {product.length === 0 ?
                        <div className='d-flex justify-content-center'>
                            <ClimbingBoxLoader size={20} />
                        </div> : filteredData.length === 0 ?
                            product.map(item => (
                                <SingleCard
                                    key={item.id}
                                    img={item.image}
                                    title={item.title}
                                    price={item.price}
                                    id={item.id}
                                />
                            )) : filteredData.map(item => (
                                <SingleCard
                                    key={item.id}
                                    img={item.image}
                                    title={item.title}
                                    price={item.price}
                                    id={item.id}
                                />
                            ))}
                </Row></Col>
            </Row>
        </>
    )
}

export default Products