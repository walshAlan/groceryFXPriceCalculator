import * as actionTypes from '../actionTypes/stocks';

export const fetchPrices = () => (
    { 
        type: actionTypes.FETCH_PRICES 
    }
);

export const setPrices = payload => (
    {
        type: actionTypes.SET_PRICES,
        payload,
    }
);

export const addItem = payload => (
    {
        type: actionTypes.ADD_ITEM,
        payload,
    }
);

export const removeItem = payload => (
    {
        type: actionTypes.REMOVE_ITEM,
        payload,
    }
);

export const setCurrency = payload => (
    {
        type: actionTypes.SET_CURRENCY,
        payload,
    }
);

export const toggleCheckingOut = () => ({
    type: actionTypes.TOGGLE_CHECKING_OUT,
});