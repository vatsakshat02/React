import ResCard from './ResCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  let [listofRestaurants, setlistRestaurants] = useState([]);

  let [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING'
    );

    const response = await data.json();

    console.log(response);

    setlistRestaurants(
      response.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredRestaurant(
      response.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

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
            setlistRestaurants(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-cards">
        {filteredRestaurant.map((restaurant) => (
          <ResCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
