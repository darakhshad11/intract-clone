import React from 'react'
import './Onchain.css'

const Onchain =   ({ title, buttons, backgroundColor }) => {
    return (
      <div className="card" style={{ backgroundColor }}>
        <div className="bookmark-icon">🔖</div>
        <h2>{title}</h2>
        <div className="buttons">
          {buttons.map((button, index) => (
            <button key={index} onClick={button.onClick}>
              {button.label}
            </button>
          ))}
        </div>
      </div>
    );
  };
export default Onchain