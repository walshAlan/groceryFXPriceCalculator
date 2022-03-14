import { call } from "@redux-saga/core/effects";

const calculateTotal = (exchangeRate, itemCounts, itemPrices, items) => {
    let sum = 0;
    for(let i = 0; i < items.length; i += 1) {
       sum += itemPrices[items[i]] * itemCounts[items[i]] * exchangeRate;
    }
    return Math.round(sum * 100) / 100;
};

export default calculateTotal;