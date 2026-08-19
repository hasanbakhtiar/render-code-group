const initialState = [];

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_PRODUCT":
            return [action.product,...state];

        default:
            return state;
    }
}