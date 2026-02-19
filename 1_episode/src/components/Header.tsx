import { LOGO_URL } from '../utils/constant';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnNameReact, setbtnNamereact] = useState<string>('Login');

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} className="logo" />
      </div>
      <div className="navbar">
        <ul>
          <li>Online Status: {onlineStatus ? '🟢' : '🔴'}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === 'Login'
                ? setbtnNamereact('Logout')
                : setbtnNamereact('Login');
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
