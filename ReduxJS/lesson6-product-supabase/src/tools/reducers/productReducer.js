const initialState = [];

export const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case "GET_PRODUCT":
            return [...action.product, ...state];


        default:
            return state;
    }
}