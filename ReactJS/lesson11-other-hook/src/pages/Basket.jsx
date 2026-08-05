import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useCart } from 'react-use-cart'

const Basket = () => {
    const { items, updateItemQuantity, removeItem, isEmpty, cartTotal, emptyCart } = useCart();

    return (
        <>
            {isEmpty ? <p className='text-center h1 my-5'>Basket is empty</p> :
                <div>
                    <p className='h1 text-center my-5'>Basket</p>
                    <Container>
                        <Row >
                            <Col md={12}>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Amout</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.map((item, index) => (
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td><img src={item.image} width={50} alt="" /></td>
                                                <td>{item.title}</td>
                                                <td>${item.price}</td>
                                                <td>${item.price * item.quantity}</td>
                                                <td>
                                                    <button
                                                        className='btn btn-outline-warning'
                                                        onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}>-</button>

                                                    <span className='mx-3'>{item.quantity}</span>

                                                    <button
                                                        className='btn btn-outline-warning'
                                                        onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}>+</button>
                                                </td>

                                                <td><button className='btn btn-outline-danger'
                                                    onClick={() => removeItem(item.id)}> X</button></td>
                                            </tr>
                                        ))}


                                    </tbody>
                                </table>
                            </Col>
                        </Row>

                        <p className='h3 my-3'>Total price: ${cartTotal.toFixed()}</p>
                        <button className='btn btn-danger' onClick={() => { emptyCart() }}>Clear all</button>
                    </Container>

                </div>}


        </ >
    )
}

export default Basket