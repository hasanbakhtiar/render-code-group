export const categoryAddAction = ({ id, title }) => ({
    type: "CREATE_CATEGORY",
    category: {
        id, title
    }
})

export const categoryDeleteAction = (id) => ({
    type: "DELETE_CATEGORY",
    id
})