import { connect } from 'react-redux';
import { setMetric } from '../action/metrics';
import Metrics from '../component/ListItems';

export const mapStateToProps = ({ metricReducer }) => {
    return {
        selectedMetric: metricReducer.metric,
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (metric) => {
            return dispatch(setMetric(metric));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Metrics);