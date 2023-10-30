import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.scss';
import cn from 'classnames';
import { shareChangeState } from '../../utils/variables';
import { setFavShare, deleteFavShare } from '../../features/favouriteSharesList/favouriteSharesListSlice';
import { FavouriteIcon } from '../../assets/SVGcomponents/FavouriteIcon';
import { AddToFavouriteIcon } from '../../assets/SVGcomponents/AddToFavouriteIcon';

export const Share = ({ share }) => {
  const dispatch = useDispatch();
  const [shareState, setShareState] = useState(null);
  const prevPrice = useRef(0);
  const { favSharesTickers } = useSelector(state => state.favouriteSharesList);

  const isShareInWatchList = favSharesTickers.includes(share.ticker);
  const sign = shareState === shareChangeState.DOWN ? '-' : '+';

  useEffect(() => {
    setShareState(share.price > prevPrice.current
      ? shareChangeState.UP
      : shareChangeState.DOWN);

    prevPrice.current = share.price;
  }, [share]);

  const toggleFavourite = () => {
    dispatch(isShareInWatchList ? deleteFavShare(share.ticker) : setFavShare(share));
  }


  return (
    <li
      className={cn(style.shareWrapper, {
        [style[`shareWrapper${shareState}`]]: true,
      })}
      data-testid='shareItem'
    >
      <div
        role='button'
        onClick={toggleFavourite}
      >
        {isShareInWatchList
          ? <FavouriteIcon />
          : <AddToFavouriteIcon />
        }
      </div>
      <h3
        className={cn(style.shareTicker, {
          [style[`shareTicker${shareState}`]]: true,
        })}
      >
        {share.ticker}
      </h3>

      <p
        className={cn(style.sharePrice, {
          [style[`sharePrice${shareState}`]]: true,
        })}
      >
        {share.price}$
      </p>

      <div>
        <p
          className={cn(style.sharePriceChange, {
            [style[`sharePrice${shareState}`]]: true,
          })}
        >
          {sign}{share.change_percent}%
        </p>

        <p
          className={cn(style.sharePriceChange, {
            [style[`sharePrice${shareState}`]]: true,
          })}
        >
          {sign}{share.change}$
        </p>
      </div>
    </li >
  )
}