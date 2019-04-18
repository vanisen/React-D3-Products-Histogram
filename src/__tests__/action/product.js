import { setProducts, SET_PRODUCT_LIST } from "../../action/product";

describe('Product', () => {
    it('should return action for setting product list', () => {
        expect(setProducts()).toEqual({
            type: SET_PRODUCT_LIST,
        });
    });
});