import { connect } from 'react-redux';
import withSizes from 'react-sizes';
import { getProductList } from '../action/product';
import Histogram from '../component/Histogram';

export const mapStateToProps = ({ productReducer, metricReducer }) => {
    return {
        selectedMetric: metricReducer.metric,
        products: productReducer.data,
    };
};
//object short-hand version
const mapDispatchToProps = {fetchProductList: getProductList } // auto-dispatch

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 480,
});

export default connect(mapStateToProps, mapDispatchToProps)(withSizes(mapSizesToProps)(Histogram));