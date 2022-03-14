import { connect } from 'react-redux';
import AppComponent from '../App';
import { selectPrices, selectItemPrices, selectItems, selectItemCounts, selectCheckingOut } from '../store/selectors/stocks';
import * as actionTypes from '../store/actionTypes';


const mapStateToProps = (state) => {
    return {
        prices: selectPrices(state),
        items: selectItems(state),
        itemPrices: selectItemPrices(state),
        itemCounts: selectItemCounts(state),
        checkingOut: selectCheckingOut(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPrices: () => dispatch({type: actionTypes.FETCH_PRICES}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);