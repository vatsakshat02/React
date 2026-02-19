export type Restaurant = {
  info: {
    id: string;
    name: string;
    cloudinaryImageId: string;
    costForTwo: string;
    cuisines: string[];
    avgRating: number;
    sla: {
      deliveryTime: number;
    };
  };
};
