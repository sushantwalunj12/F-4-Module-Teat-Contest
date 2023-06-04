import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <span>
        <Link to="/" className='link'>Social Meadia App</Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;