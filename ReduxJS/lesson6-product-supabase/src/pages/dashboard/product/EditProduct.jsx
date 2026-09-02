import { useParams } from "react-router-dom"
import ProductForm from "./ProductForm"
import { useSelector } from "react-redux";
import { productUpdateAction } from "../../../tools/actions/productAction";

const EditProduct = () => {

    const { id } = useParams();
    const productData = useSelector(p => p.product);
    const findData = productData.find(p => p.id == id);
    return (
        <div>
            <h2 className='my-5 text-center'>Edit Product</h2>
            <ProductForm editdata={findData} formData={(fd) => { productUpdateAction(findData.id, fd) }} />
        </div>
    )
}

export default EditProduct