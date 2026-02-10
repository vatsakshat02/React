import ResCard from './ResCard';
import resList from '../utils/mockData';
import { useState } from 'react';

let listofRestaurantsJS = [
  {
    info: {
      id: '93957',
      name: 'The Burger Club',
      cloudinaryImageId:
        'FOOD_CATALOG/IMAGES/CMS/2025/9/7/f7c46f0b-5e13-4b9e-bdae-eeb1c9bf7252_e7fc437c-c762-4a19-b426-2fc080e23c4b.jpg',
      locality: 'B Block',
      areaName: 'Sector 41',
      costForTwo: '₹250 for two',
      cuisines: [
        'Burgers',
        'wrap',
        'Salads',
        'Fast Food',
        'Desserts',
        'Coffee',
        'Beverages',
      ],
      avgRating: 3,
      parentId: '2285',
      avgRatingString: '3.0',
      totalRatingsString: '20K+',
      promoted: true,
      adTrackingId:
        'cid=1b5549a1-c663-4b77-9de5-4b06162f7783~p=0~adgrpid=1b5549a1-c663-4b77-9de5-4b06162f7783#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=93957~plpr=COLLECTION~eid=d327bbf7-5e85-429d-8426-3c1a55b04443~srvts=1770557783415~collid=83637',
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.7,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '4.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
    },
  },
  {
    info: {
      id: '93952',
      name: 'kfc',
      cloudinaryImageId:
        'FOOD_CATALOG/IMAGES/CMS/2025/9/7/f7c46f0b-5e13-4b9e-bdae-eeb1c9bf7252_e7fc437c-c762-4a19-b426-2fc080e23c4b.jpg',
      locality: 'B Block',
      areaName: 'Sector 41',
      costForTwo: '₹250 for two',
      cuisines: [
        'Burgers',
        'wrap',
        'Salads',
        'Fast Food',
        'Desserts',
        'Coffee',
        'Beverages',
      ],
      avgRating: 4.2,
      parentId: '2285',
      avgRatingString: '4.0',
      totalRatingsString: '20K+',
      promoted: true,
      adTrackingId:
        'cid=1b5549a1-c663-4b77-9de5-4b06162f7783~p=0~adgrpid=1b5549a1-c663-4b77-9de5-4b06162f7783#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=93957~plpr=COLLECTION~eid=d327bbf7-5e85-429d-8426-3c1a55b04443~srvts=1770557783415~collid=83637',
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.7,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '4.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
    },
  },
];
const Body = () => {
  let [listofRestaurants, setlistRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //we need filter logic over here
            const filteredList = listofRestaurants.filter(
              (res) => res.card.card.info.avgRating > 4.5
            );
            setlistRestaurants(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-cards">
        {listofRestaurants.map((restaurant) => (
          <ResCard resData={restaurant} key={restaurant.card.card.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
