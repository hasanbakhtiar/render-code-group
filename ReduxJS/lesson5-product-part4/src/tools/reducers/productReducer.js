const initialState = [];

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_PRODUCT":
            return [action.product, ...state];

        case "UPDATE_PRODUCT":
            return state.map(item => {
                if (item.id == action.id) {
                    return { ...item, ...action.update }
                } else {
                    return item;
                }
            });

        case "DELETE_PRODUCT":
            return state.filter(p => p.id !== action.id);

        default:
            return state;
    }
}