import axios from 'axios';

export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';

export const setProducts = (response) => {
    return { type: SET_PRODUCT_LIST, payload: response };
}

export const getProductList = () => async (dispatch) => {
    try {
        const response = await axios.get('/api/products');
        dispatch(setProducts(response.data));
    } catch (error) {
        dispatch(setProducts([]));
    }
};

