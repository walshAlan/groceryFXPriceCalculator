import get from'lodash.get'

export const selectPrices = state => {
    const prices = get(state, 'stocks.prices.quotes');
    return prices ? prices : {};
};

export const selectItems = state => {
    const items = get(state, 'stocks.items');
    return items ? items : [];
};

export const selectItemPrices = state => {
    const itemPrices = get(state, 'stocks.itemPrices');
    return itemPrices ? itemPrices : {};
};

export const selectItemCounts = state => {
    const itemCounts = get(state, 'stocks.itemCounts');
    return itemCounts ? itemCounts : {};
};

export const selectCurrency = state => {
    const currency = get(state, 'stocks.currency');
    return currency ? currency : 'USDUSD';
};

export const selectCheckingOut = state => {
    const checkingOut = get(state, 'stocks.checkingOut');
    return checkingOut ? checkingOut : false;
}