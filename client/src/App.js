import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { fetchData } from './features/thunkActions/fetchData';
import { SharesList } from './components/SharesList';
import { WatchList } from './components/WatchList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);

  return (
    <main className="app">
      <WatchList />
      <SharesList />
    </main>
  );
}

export default App;
