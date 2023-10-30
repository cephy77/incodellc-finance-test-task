import { render } from '@testing-library/react';
import { WatchList } from '.';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';


const mockStore = createMockStore([thunk]);
const store = mockStore({
  sharesList: {
    shares: JSON.parse('[{"ticker":"AAPL","exchange":"NASDAQ","price":"268.56","change":"76.36","change_percent":"0.80","dividend":"0.67","yield":"1.74","last_trade_time":"2023-10-30T12:12:56.000Z"},{"ticker":"GOOGL","exchange":"NASDAQ","price":"240.57","change":"158.68","change_percent":"0.31","dividend":"0.34","yield":"1.17","last_trade_time":"2023-10-30T12:12:56.000Z"},{"ticker":"MSFT","exchange":"NASDAQ","price":"125.56","change":"122.27","change_percent":"0.54","dividend":"0.23","yield":"0.34","last_trade_time":"2023-10-30T12:12:56.000Z"},{"ticker":"AMZN","exchange":"NASDAQ","price":"164.81","change":"55.33","change_percent":"0.92","dividend":"0.24","yield":"1.20","last_trade_time":"2023-10-30T12:12:56.000Z"},{"ticker":"FB","exchange":"NASDAQ","price":"221.02","change":"9.60","change_percent":"0.72","dividend":"0.97","yield":"1.47","last_trade_time":"2023-10-30T12:12:56.000Z"},{"ticker":"TSLA","exchange":"NASDAQ","price":"284.58","change":"0.90","change_percent":"0.06","dividend":"0.64","yield":"0.97","last_trade_time":"2023-10-30T12:12:56.000Z"}]'),
  },
  favouriteSharesList: {
    favSharesTickers: ['AAPL'],
    favSharesList: [{ ticker: "AAPL", exchange: "NASDAQ", price: "268.56", change: "76.36", change_percent: "0.80", dividend: "0.67", yield: "1.74", last_trade_time: "2023-10-30T12:12:56.000Z" }],
  },
});


test('WatchList should render items', () => {
  const screen = render(
    <Provider store={store}>
      <WatchList />
    </Provider>
  );

  const elements = screen.getAllByTestId('shareItem');

  expect(elements.length > 0).toBe(true);
});

test('WatchList should render proper number of items', () => {
  const screen = render(
    <Provider store={store}>
      <WatchList />
    </Provider>
  );

  const elements = screen.getAllByTestId('shareItem');

  expect(elements.length === 1).toBe(true);
});

test('WatchList should has a message if there is no stocks', () => {
  const store = mockStore({
    sharesList: {
      shares: []
    },
    favouriteSharesList: {
      favSharesTickers: [],
      favSharesList: [],
    },
  });

  const screen = render(
    <Provider store={store}>
      <WatchList />
    </Provider>
  );

  const element = screen.getByText('Add stocks to watch');

  expect(element).toBeInTheDocument();
});

