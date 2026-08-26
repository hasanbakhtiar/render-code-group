import React, { useRef } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { categoryAddAction } from '../../../tools/actions/categoryAction';

const AddCategory = () => {
    const idRef = useRef();
    const titleRef = useRef();


    const dispatch = useDispatch();

    const formSubmited = e => {
        e.preventDefault();
        dispatch(categoryAddAction({
            id: idRef.current.value,
            title: titleRef.current.value,
        }));
        window.history.back();

    }

    return (
        <div className='d-flex align-items-center justify-content-center flex-column'>
            <h2 className='my-5'>Add Category</h2>
            <Col md={5}>
                <form onSubmit={formSubmited}>
                    <div className="mb-3">
                        <label className="form-label">ID</label>
                        <input ref={idRef} type="text" className="form-control" />
                    </div>

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