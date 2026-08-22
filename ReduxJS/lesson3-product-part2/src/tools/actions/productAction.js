export const productAddAction = ({ id, image, title, price, description, category }) => ({
    type: "CREATE_PRODUCT",
    product: {
        id, image, title, price, description, category
    }
})

export const productDeleteAction = (id) => ({
    type: "DELETE_PRODUCT",
    id
})