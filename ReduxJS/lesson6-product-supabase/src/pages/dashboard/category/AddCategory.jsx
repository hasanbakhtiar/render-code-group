import React, { useRef } from 'react'
import { Col } from 'react-bootstrap'
import { categoryAddAction } from '../../../tools/actions/categoryAction';

const AddCategory = () => {
    const titleRef = useRef();
    
    const formSubmited = e => {
        e.preventDefault();
        categoryAddAction({
            title: titleRef.current.value,
        });
    }

    return (
        <div className='d-flex align-items-center justify-content-center flex-column'>
            <h2 className='my-5'>Add Category</h2>
            <Col md={5}>
                <form onSubmit={formSubmited}>


                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input ref={titleRef} type="text" className="form-control" />
                    </div>


                    <button type="submit" className="btn btn-dark">Add new</button>
                </form>

            </Col>
        </div>
    )
}

export default AddCategory