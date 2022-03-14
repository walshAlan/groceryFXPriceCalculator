import { items, itemPrices, itemCounts } from '../utils/items';

export const initialState = {
    items,
    itemPrices,
    itemCounts,
    checkingOut: false,
    currency: 'USDUSD',
};