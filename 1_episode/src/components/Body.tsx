import ResCard from './ResCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import type { Restaurant } from '../types/restaurant';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  let [listofRestaurants, setlistRestaurants] = useState<Restaurant[]>([]);

  let [filteredRestaurant, setfilteredRestaurant] = useState<Restaurant[]>([]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://foodfire.onrender.com/api/restaurants?lat=28.7041&lng=77.1310&page_type=DESKTOP_WEB_LISTING'
    );

    const response = await data.json();

    const restaurants =
      response.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ?? [];
    setlistRestaurants(restaurants);
    setfilteredRestaurant(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline !!! please check your internet connection
      </h1>
    );
  }

  //conditional rendering
  if (listofRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchbox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          {/* onclick of this button i want to filter and update the ui */}
          <button
            onClick={() => {
              const filteredRestaurant = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //we need filter logic over here
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setfilteredRestaurant(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-cards">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={'/restaurants/' + restaurant.info.id}
          >
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
