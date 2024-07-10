import React, { useState } from 'react';

const EcoCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="eco-card"
      style={{ backgroundColor: data.backgroundColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={data.image} alt="Card" className="eco-card-image" />
      {isHovered && data.name && (
        <div className="eco-card-name">{data.name}</div>
      )}
    </div>
  );
};

export default EcoCard;
