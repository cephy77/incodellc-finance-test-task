import { useSelector } from 'react-redux';
import style from './style.module.scss';
import { Share } from '../Share';

export const SharesList = () => {
  const { shares } = useSelector(state => state.sharesList);

  return (
    <div className={style.sharesListWrapper}>
      <h2 className={style.sharesListHeader}>All Stocks</h2>

      <ul
        className={style.sharesListList}
        data-testid='sharesList'
      >
        {shares.map((share) => (
          <Share share={share} key={share.ticker} />
        ))}
        {Boolean(shares.length === 0) && (
          <p>The stocks are loading</p>
        )}
      </ul>
    </div>
  );
}