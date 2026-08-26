const initialState = [];

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_CATEGORY":
            return [action.category, ...state];

        case "DELETE_CATEGORY":
            return state.filter(p => p.id !== action.id);

        default:
            return state;
    }
}