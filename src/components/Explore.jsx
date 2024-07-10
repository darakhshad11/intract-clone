import React from 'react';
import Footer from './Footer';
import './Explore.css'; // Make sure to create and use an appropriate CSS file
import cardData from './Data.jsx';
//@ts-ignore
import Card from './Card.jsx';
 // Ensure the path is correct

const Explore = () => {
  return (
    <>
    
  <div className="App">
      <div className="explore">
        <h1 className="title">Explore</h1>
        <div className="search-bar">
          <svg className="search-icon" viewBox="0 0 24 24">
            <path d="M21.71,20.29l-5.63-5.63A7.92,7.92,0,1,0,19.79,16l5.63,5.63a1,1,0,0,0,1.41-1.41ZM11,18A7,7,0,1,1,18,11,7,7,0,0,1,11,18Z"/>
          </svg>
          <input type="text" placeholder="Search in explore" />
        </div>
        <div className="categories">
          <button className="category-button">Quests (703)</button>
          <button className="category-button">NFTs (116)</button>
          <button className="category-button">Communities (674)</button>
          <button className="category-button">Events (31)</button>
        </div>
      </div>
        <hr className='line' />
        <div className="mainButtons">
          <button className="main-button">Ecosystems ▼</button>
          <button className="main-button">Reward ▼</button>
          <button className="main-button">Reward Distributed ▼</button>
          <button className="main-button">Saved</button>
          <button className="main-button">Hide Alpha Hub</button>
          <button className="main-button">Hide Completed ✕</button>
          <button className="main-button">Hide Expired ✕</button>
          <button className="main-button">Recommended ▼</button>
        </div>
        <div className="card-container">
        {cardData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
      <Footer />
    </>
  );
};

export default Explore;
