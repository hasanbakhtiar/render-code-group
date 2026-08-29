import React from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { categoryDeleteAction } from '../../../tools/actions/categoryAction'

const Category = () => {
  const categoryData = useSelector(p => p.category);
  const dispatch = useDispatch();
  return (
    <div className='container'>
      <h1 className='my-5 text-center'>Category</h1>
      <Link to={"/dashboard/category/add"} className='btn btn-dark'>Add</Link>
      <div className="d-flex align-items-center justify-content-center">
        <Col md={12}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {categoryData.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.title}</td>
                  <td><Link className='btn btn-warning'>Edit</Link></td>
                  <td><button onClick={() => { dispatch(categoryDeleteAction(item.id)) }} className='btn btn-danger'>X</button></td>
                </tr>
              ))}


            </tbody>
          </table>

        </Col>
      </div>
    </div>
  )
}

export default Category