import React from 'react';
import './Body.css';
import academy from '../logo/academy-animated-logo-57b2ae61.gif';
import rightarrow from '../logo/rightarrow.svg';
import Acadebody from './Acadebody';

const Body = () => {
  return (
    <div className="main-content">
      <div className="academy-gif">
        <img src={academy} alt="academy logo"  style={{width:"200px" , marginRight:"300px"}}/>
      </div>
      <p className="intro-text">
        intract users have together made more than $100 million in web3.<br />
        Join them and learn how to earn crypto!
      </p>
      <button className="get">
        Get Started
        <img src={rightarrow} alt="right arrow" className="arrow-icon" />
      </button>
      
    </div>
  );
};

export default Body;
