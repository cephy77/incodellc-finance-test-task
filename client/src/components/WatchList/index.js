import { useSelector } from 'react-redux';
import style from './style.module.scss';
import { Share } from '../Share';

export const WatchList = () => {
  const { favSharesList } = useSelector(state => state.favouriteSharesList);

  return (
    <div data-testid='watchList' className={style.watchListWrapper}>
      <h2>Watch list</h2>
      <ul className={style.watchListList}>
        {favSharesList.map(share => <Share share={share} key={share.ticker} />)}
        {Boolean(favSharesList.length === 0) && (
          <p>Add stocks to watch</p>
        )}
      </ul>
    </div>
  );
}