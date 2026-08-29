import { useState } from "react"
import { Col } from "react-bootstrap"
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";

const ProductForm = ({ formData, editdata }) => {

    const categoryData = useSelector(p => p.category);
    const [id, setId] = useState(editdata ? editdata.id : "");
    const [image, setImage] = useState(editdata ? editdata.image : "");
    const [title, setTitle] = useState(editdata ? editdata.title : "");
    const [price, setPrice] = useState(editdata ? editdata.price : "");
    const [description, setDescription] = useState(editdata ? editdata.description : "");
    const [category, setCategory] = useState(editdata ? editdata.category : "");
        const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        formData({
            id, image, title, price, description, category
        });
        navigate('/dashboard/product')
    }
    return (
        <div className='d-flex align-items-center justify-content-center flex-column'>
            <Col md={5}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">ID</label>
                        <input onChange={e => setId(e.target.value)} type="text" className="form-control" value={id} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Image</label>
                        <input onChange={e => setImage(e.target.value)} type="text" className="form-control" value={image} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input onChange={e => setTitle(e.target.value)} type="text" className="form-control" value={title} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input onChange={e => setPrice(e.target.value)} type="text" className="form-control" value={price} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <select
                            className="form-select"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        >
                            <option value="" disabled>Open this select menu</option>
                            {categoryData.map((item, index) => (
                                <option key={index} value={item.title}>{item.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input onChange={e => setDescription(e.target.value)} type="text" className="form-control" value={description} />
                    </div>



                    <button type="submit" className="btn btn-dark">Add new</button>
                </form>

            </Col>
        </div>
    )
}

export default ProductForm