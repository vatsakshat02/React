import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Menu_API } from '../utils/constant';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState<any>(null);

  if (resInfo === null) return <Shimmer />;

  const restaurantInfo = resInfo?.cards?.find(
    (c: any) => c?.card?.card?.info?.name
  ).card?.card?.info;

  const regularCards = resInfo?.cards?.find((c: any) => c?.groupedCard)
    .groupedCard?.cardGroupMap?.REGULAR?.cards;

  const menuItems = regularCards
    ?.filter((c: any) => c?.card?.card?.itemCards)
    .flatMap((c: any) => c?.card?.card?.itemCards);

  const categories = regularCards?.filter(
    (c: any) =>
      c.card?.card?.['@type'] ===
      'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  );

  const { name, cuisines, costForTwoMessage } = restaurantInfo || {};
  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(',')}</p>
      <ul>
        {menuItems?.map((item: any, index: number) => (
          <li key={`${item?.card?.info?.id}-${index}`}>
            {item?.card?.info?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
