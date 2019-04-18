import { mapDispatchToProps, mapStateToProps } from "../../container/Metrics";

describe('Metrics', () => {
    it('mapStateToProps', () => {
        expect(mapStateToProps({ metricReducer: { metric: '1' }})).toEqual({
            selectedMetric: '1',
        });
    });

    it('mapDispatchToProps', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).onClick();
        expect(dispatch).toHaveBeenCalled();
    });
});