import React, { useRef } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { productAddAction } from '../../../tools/actions/productAction';

const AddProduct = () => {

    const categoryData = useSelector(p => p.category);

    const idRef = useRef();
    const imageRef = useRef();
    const titleRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();

    const dispatch = useDispatch();

    const formSubmited = e => {
        e.preventDefault();
        dispatch(productAddAction({
            id: idRef.current.value,
            image: imageRef.current.value,
            title: titleRef.current.value,
            price: priceRef.current.value,
            description: descriptionRef.current.value,
            category: categoryRef.current.value,
        }));
        window.history.back();

    }

    return (
        <div className='d-flex align-items-center justify-content-center flex-column'>
            <h2 className='my-5'>Add Product</h2>
            <Col md={5}>
                <form onSubmit={formSubmited}>
                    <div className="mb-3">
                        <label className="form-label">ID</label>
                        <input ref={idRef} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Image</label>
                        <input ref={imageRef} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input ref={titleRef} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input ref={priceRef} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <select ref={categoryRef} class="form-select">
                            <option selected>Open this select menu</option>
                            {categoryData.map((item, index) => (
                                <option key={index} value={item.title}>{item.title}</option>

                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input ref={descriptionRef} type="text" className="form-control" />
                    </div>



                    <button type="submit" className="btn btn-dark">Add new</button>
                </form>

            </Col>
        </div>
    )
}

export default AddProduct