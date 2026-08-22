import React from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { productDeleteAction } from '../../../tools/actions/productAction'

const Product = () => {
  const productData = useSelector(p => p.product);
  const dispatch = useDispatch();
  return (
    <div className='container'>
      <h1 className='my-5 text-center'>Product</h1>
      <Link to={"/dashboard/product/add"} className='btn btn-dark'>Add</Link>
      <div className="d-flex align-items-center justify-content-center">
        <Col md={12}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {productData.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td><img width={100} src={item.image} alt={item.title} /></td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td><Link className='btn btn-warning'>Edit</Link></td>
                  <td><button onClick={() => { dispatch(productDeleteAction(item.id)) }} className='btn btn-danger'>X</button></td>
                </tr>
              ))}


            </tbody>
          </table>

        </Col>
      </div>
    </div>
  )
}

export default Product