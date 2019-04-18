import { SET_PRODUCT_LIST } from "../action/product";

const defaultState = {
    data: [],
    metric: 'average_unit_price',
};

export default (state = defaultState, action)  => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            return { ...state, data: action.payload };
        default:
            return state;
    }
}


