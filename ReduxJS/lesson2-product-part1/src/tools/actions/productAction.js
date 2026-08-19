export const productAddAction = ({ id, image, title, price, description }) => ({
    type: "CREATE_PRODUCT",
    product: {
        id, image, title, price, description
    }
})