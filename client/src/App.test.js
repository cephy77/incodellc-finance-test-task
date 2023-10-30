import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';


const mockStore = createMockStore([thunk]);
const store = mockStore({
  sharesList: {
    shares: []
  },
  favouriteSharesList: {
    favSharesTickers: [],
    favSharesList: [],
  },
});


test('App has WatchList', () => {
  const screen = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const element = screen.getByTestId('watchList');

  expect(element).toBeInTheDocument();
});

test('App has SharesList', () => {
  const screen = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const element = screen.getByTestId('sharesList');

  expect(element).toBeInTheDocument();
});
