import React from 'react';
import './Cart.css';
import card from '../logo/card.svg';
import car1 from '../logo/car1.png';
import car2 from '../logo/car2.png';
import car3 from '../logo/car3.png';
import car4 from '../logo/car4.png';

const Cart = () => {
  const cards = [
    { title: 'c1', subtitle: 'Subtitle 1', img: car1 },
    { title: 'c2', subtitle: 'Subtitle 2', img: car2 },
    { title: 'c3', subtitle: 'Subtitle 3', img: car3 },
    { title: 'c4', subtitle: 'Subtitle 4', img: car4 },
  ];

  return (
    <div className='cart-c'>
      <h4 className='h4'>Top Crypto Creators and Projects to Follow</h4>
      <div className='div'>Answers to your crypto doubts, straight from the experts</div>
      <div className="cart-container">
        {cards.map((card, index) => (
          <div className="cart" key={index}>
            <div className="cart-image">
              <img src={card.img} alt={`Card ${index + 1} illustration`} />
            </div>
          </div>
        ))}
      </div>
      <hr></hr>
     <div className='cry'>Crypto Dictionary</div>
      <div className='hdiv'>Your one-stop to catch up on all crypto terms</div>
      <div className='image'>
        <img src={card} alt="Card SVG" />
      </div>
      <div className="button">
        <button>Essentials</button>
        <button>Alpha Hub</button>
      </div>
    </div>
  );
}

export default Cart;
