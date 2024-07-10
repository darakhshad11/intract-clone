import React from 'react';
import circle from '../logo/circle.png';
import cat from '../logo/cat.png';
import './Acadebody.css';

const Acadebody = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <div className="image-container">
            <img src={circle} alt="circle logo" />
          </div>
          <div className="header-content">
            <h2>Basics of Crypto</h2>
            <div>The safest and easiest place to start your crypto journey!</div>
          </div>
        </div>
        <div className="card-content">
          <p className='paragraph'>This is some scrollable content inside the card. You can add more content here to see the scrolling effect.</p>
          <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus euismod enim, ut bibendum nisi euismod ut. Donec venenatis mi id nulla sollicitudin, a scelerisque purus euismod. Proin eget magna vel erat laoreet interdum.</p>
          <p className='paragraph'>Aliquam erat volutpat. Proin vulputate lorem ut vehicula volutpat. Duis dapibus urna a nibh convallis, sed iaculis libero lacinia. Fusce feugiat, augue at sagittis bibendum, lorem ligula bibendum odio, at convallis velit nisl et odio.</p>
          <p className='paragraph'>Curabitur malesuada ligula nec enim malesuada, ac venenatis urna viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent a nisl ac nisi fermentum posuere id ut justo.</p>
          <p className='paragraph'>Etiam nec mi nec urna varius suscipit in nec justo. Aenean pharetra libero nec tellus sodales, ut venenatis ipsum laoreet. Donec quis libero id arcu gravida egestas.</p>
        </div>
      </div>

      <div className="card-2">
        <div className="card-header">
          <div className="image-container">
            <img src={cat} alt="circle logo" />
          </div>
          <div className="header-content">
          
          </div>
        </div>
       
      </div>
      <div className="card-3">
        <div className="card-header">
          <div className="image-container">
            <img src={circle} alt="circle logo" />
          </div>
          <div className="header-content">
            <h2>Basics of Crypto</h2>
            <div>The safest and easiest place to start your crypto journey!</div>
          </div>
        </div>
        <div className="card-content">
          <p className='paragraph'>This is some scrollable content inside the card. You can add more content here to see the scrolling effect.</p>
          <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus euismod enim, ut bibendum nisi euismod ut. Donec venenatis mi id nulla sollicitudin, a scelerisque purus euismod. Proin eget magna vel erat laoreet interdum.</p>
          <p className='paragraph'>Aliquam erat volutpat. Proin vulputate lorem ut vehicula volutpat. Duis dapibus urna a nibh convallis, sed iaculis libero lacinia. Fusce feugiat, augue at sagittis bibendum, lorem ligula bibendum odio, at convallis velit nisl et odio.</p>
          <p className='paragraph'>Curabitur malesuada ligula nec enim malesuada, ac venenatis urna viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent a nisl ac nisi fermentum posuere id ut justo.</p>
          <p className='paragraph'>Etiam nec mi nec urna varius suscipit in nec justo. Aenean pharetra libero nec tellus sodales, ut venenatis ipsum laoreet. Donec quis libero id arcu gravida egestas.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Acadebody;
