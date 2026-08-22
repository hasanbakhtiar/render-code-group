const initialState = [];

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_PRODUCT":
            return [action.product, ...state];

        case "DELETE_PRODUCT":
            return state.filter(p => p.id !== action.id);

        default:
            return state;
    }
}