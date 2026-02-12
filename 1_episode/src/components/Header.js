import { LOGO_URL } from '../utils/constant';
import { useState } from 'react';

const Header = () => {
  const [btnNameReact, setbtnNamereact] = useState('login');
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} className="logo" />
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
