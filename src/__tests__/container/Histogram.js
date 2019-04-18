import { mapDispatchToProps, mapStateToProps } from "../../container/Histogram";

describe('Histogram', () => {
    it('mapStateToProps', () => {
        expect(mapStateToProps({ productReducer: { data: 'foo' }, metricReducer: { metric: '1' }})).toEqual({
            products: 'foo',
            selectedMetric: '1',
        });
    });

    it('mapDispatchToProps', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).fetchProductList();
        expect(dispatch).toHaveBeenCalled();
    });
});