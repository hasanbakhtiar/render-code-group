import { supabase } from "../../utils/supabase";

export const getCategoryAction = (category) => ({
    type: "GET_CATEGORY",
    category
})

export const categoryAddAction = async ({ title }) => {
    const { error } = await supabase
        .from('category')
        .insert({ title });
    if (error) {
        console.log(error);
    }
    window.location.assign('/dashboard/category');
}

export const categoryDeleteAction = async (id) => {
    const response = await supabase
        .from('category')
        .delete()
        .eq('id', id);
    if (response) {
        console.log(response);

    }
}