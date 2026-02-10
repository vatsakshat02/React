import { CDN_URl } from '../utils/constant';

const ResCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    resData?.card.card.info;
  return (
    <div className="ResCard" style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className="res-logo"
        src={CDN_URl + resData.card.card.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>
  );
};

export default ResCard;
