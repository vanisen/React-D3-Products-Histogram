import { SET_METRIC } from "../action/metrics";

const defaultState = {
    metric: 'average_unit_price',
};

export default (state = defaultState, action)  => {
    switch (action.type) {
        case SET_METRIC:
            return { ...state, metric: action.metric };
        default:
            return state;
    }
}


