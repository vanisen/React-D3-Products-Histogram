import { setMetric, SET_METRIC } from "../../action/metrics";

describe('Metrics', () => {
    it('should return action for setting metric', () => {
        expect(setMetric()).toEqual({
            type: SET_METRIC,
        });
    });
});