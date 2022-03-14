import get from'lodash.get'
import * as actionTypes from '../actionTypes';
import { initialState } from '../initialState';

const setPrices = (state, action) => ({
    ...state,
    prices: action.payload,
});

const addItem = (state, action) => {
    // increment item count for given item
    const newItemCounts = get(state, 'itemCounts');
    newItemCounts[get(action, 'payload.itemName')] += 1;
    return {
        ...state,
        itemCounts: newItemCounts,
    }
};

const removeItem = (state, action) => {
    // decrement item count for given item
    const newItemCounts = get(state, 'itemCounts');
    newItemCounts[get(action, 'payload.itemName')] -= 1;
    return {
        ...state,
        itemCounts: newItemCounts,
    }
};

const setCurrency = (state, action) => {
    return {
        ...state,
        currency: action.payload.currency,
    }
}

const toggleCheckingOut = (state, action) => {
    return {
        ...state,
        checkingOut: !state.checkingOut,
    }
};

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_PRICES:
            return setPrices(state, action);
        case actionTypes.ADD_ITEM:
            return addItem(state, action);
        case actionTypes.REMOVE_ITEM:
            return removeItem(state, action);
        case actionTypes.SET_CURRENCY:
            return setCurrency(state, action);
        case actionTypes.TOGGLE_CHECKING_OUT:
            return toggleCheckingOut(state, action);
        default:
            return state;
    }
}