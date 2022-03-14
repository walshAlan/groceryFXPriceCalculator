import { Component } from 'react';
import calculateTotal from '../utils/calculateTotal';
import PropTypes from 'prop-types';

class Checkout extends Component {
    
    render() {
        const { itemCounts, currency, setCurrency, itemPrices, prices, items, toggleCheckingOut, checkingOut } = this.props;
        return (
            <div>
                {/* Show option to checkout when not currently checking out */}
                {!checkingOut
                ? (
                    <button onClick={() => toggleCheckingOut()} style={{height: 25, "margin-top": 21}}>
                        CHECKOUT
                    </button>
                ) : null}
                {/* Show price and currency options when checking out */}
                {
                    checkingOut
                    ? (
                        <div style={{margin: 25}}>
                            <div style={{display: 'flex', "margin-bottom": 10}}>
                                <div style={{"margin-right": 10, "font-size": 25}}>{calculateTotal(prices[currency], itemCounts, itemPrices, items)}</div>
                                <select onChange={e => setCurrency(e.target.value)}>
                                    {
                                        Object.keys(prices).map(price => {
                                            return (
                                                <option value={price}>
                                                    {price.substring(price.length - 3)}
                                                </option>);
                                        })
                                    }
                                </select>
                            </div>       
                            <button onClick={() => toggleCheckingOut() } >GO BACK</button>
                        </div>)
                : null}
            </div>
        );
    }
}

Checkout.propTypes = {
    itemCounts: PropTypes.object,
    currency: PropTypes.string,
    setCurrency: PropTypes.func,
    itemPrices: PropTypes.object,
    prices: PropTypes.object,
    items: PropTypes.array,
    toggleCheckingOut: PropTypes.func,
    checkingOut: PropTypes.bool,
}

export default Checkout;
