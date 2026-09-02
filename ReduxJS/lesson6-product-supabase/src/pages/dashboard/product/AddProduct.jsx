import { productAddAction } from '../../../tools/actions/productAction';
import ProductForm from './ProductForm';

const AddProduct = () => {


    return (
        <>
            <h2 className='my-5 text-center'>Add Product</h2>
            <ProductForm formData={(fd) => { productAddAction(fd) }} />

        </>
    )
}

export default AddProduct