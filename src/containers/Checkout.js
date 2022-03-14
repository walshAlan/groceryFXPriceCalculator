import { connect } from 'react-redux';
import CheckoutComponent from '../components/Checkout';
import { selectCurrency, selectItemCounts, selectItemPrices, selectItems, selectPrices, selectCheckingOut } from '../store/selectors/stocks';
import * as actionTypes from '../store/actionTypes';


const mapStateToProps = (state) => {
    return {
        currency: selectCurrency(state),
        prices: selectPrices(state),
        itemCounts: selectItemCounts(state),
        itemPrices: selectItemPrices(state),
        items: selectItems(state),
        checkingOut: selectCheckingOut(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrency: currency => {
            dispatch({
                type: actionTypes.SET_CURRENCY,
                payload: {
                    currency,
                }
            })
        },
        toggleCheckingOut: () => dispatch({
            type: actionTypes.TOGGLE_CHECKING_OUT,
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutComponent);