import reducer from '../store/reducers/stocks';
import expect from 'expect';
import { initialState } from '../store/initialState';
import * as actions from '../store/actions/stocks';

describe('stocks reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
        });
});

describe('add item count reducer', () => {
  const itemName = 'SOUP';
  const expectedItemCount = 1;
  const testInitialState = initialState;
  it('should increment item count', () => {
      expect(reducer(testInitialState, actions.addItem({itemName})).itemCounts[itemName]).toEqual(expectedItemCount);
      });
});

describe('remove item count reducer', () => {
  const itemName = 'BREAD';
  const expectedItemCount = 0;
  const testInitialState = initialState;
  testInitialState.itemCounts[itemName] = 1;
  it('should decrement item count', () => {
      expect(reducer(testInitialState, actions.removeItem({itemName})).itemCounts[itemName]).toEqual(expectedItemCount);
      });
});

describe('set currency reducer', () => {
  const newCurrency = 'GBP';
  const testInitialState = initialState;
  it('should set new currency', () => {
      expect(reducer(testInitialState, actions.setCurrency({currency: newCurrency})).currency).toEqual(newCurrency);
      });
});

describe('toggle checking out', () => {
  const testInitialState = initialState;
  const expectedCheckingOut = true;
  it('toggle checking out boolean', () => {
    expect(reducer(testInitialState, actions.toggleCheckingOut()).checkingOut).toEqual(expectedCheckingOut);
  });
});