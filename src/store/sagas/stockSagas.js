import { call, put } from 'redux-saga/effects';
import * as actions from '../actions';

const getPrices = async () => {
    const pricesLink = 'http://api.currencylayer.com/live?access_key=6fd54799bc7d50cc830a462eb2bd1d21&currencies=USD,AUD,CAD,PLN,MXN&format=1';
    return await fetch(pricesLink)
        .then(res => res.json());
}

export function* fetchPricesSaga() {
    // get prices from the API and then fire an action to store them in the redux store
    try {
        const prices = yield call(getPrices);
        yield put(actions.setPrices(prices));
    } catch (e) {
        console.log(e.message);
    }
}