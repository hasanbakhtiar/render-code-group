const initialState = [];

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {

        case "GET_CATEGORY":
            return [...state, ...action.category];

        default:
            return state;
    }
}