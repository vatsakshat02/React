import { useEffect, useState } from 'react';
import { Menu_API } from './constant';

const useRestaurantMenu = (resId?: string) => {
  const [resInfo, setResInfo] = useState<any>(null);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    const data = await fetch(Menu_API + resId);
    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
