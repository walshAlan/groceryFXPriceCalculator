import { takeEvery } from '@redux-saga/core/effects';

import * as actionTypes from '../actionTypes';
import * as stockSagas from './stockSagas';

export function* sagaWatcher() {
    yield takeEvery(actionTypes.FETCH_PRICES, stockSagas.fetchPricesSaga);
}