import { supabase } from "../../utils/supabase";

export const getProductAction = (product) => ({
    type: "GET_PRODUCT",
    product
})


export const productAddAction = async ({ image, title, price, description, category }) => {
    const { error } = await supabase
        .from('products')
        .insert({ image, title, price, description, category });
    if (error) {
        console.log(error);
    }
    window.location.assign('/dashboard/product');

}

export const productUpdateAction = async (id, update) => {
    const { error } = await supabase
        .from('products')
        .update(update)
        .eq('id', id);
    if (error) {
        console.log(error);
    }
    window.location.assign('/dashboard/product');

}

export const productDeleteAction = async (id) => {
    const response = await supabase
        .from('products')
        .delete()
        .eq('id', id);
    if (response) {
        console.log(response);
        window.location.reload();

    }
}