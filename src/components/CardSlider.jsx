import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import './CardSlider.css';
import EcoCard from './EcoCard';

import card1 from '../logo/card1.png';
import card2 from '../logo/card2.jpg';
import card3 from '../logo/card3.jpg';
import card4 from '../logo/card4.png';
import card5 from '../logo/card5.png';
import card6 from '../logo/card6.png';
import card7 from '../logo/card7.png';

import nft1 from '../logo/nft1.png';
import nft2 from '../logo/nft2.png';
import nft3 from '../logo/nft3.png';
import nft4 from '../logo/nft4.png';


import bitcoin from '../logo/2ac5eb3d7d3c4d6dbe5b3bcfe51d28fd.png';
import Linea from '../logo/linea.webp';
import Solana from '../logo/6325c064d0cc4a6ea76ec38c0edd642a.png';
import base from '../logo/base-logo2.svg';
import blast from '../logo/blast.png';
import atom from '../logo/b38877fae64f42a49f3cb2df752f68e8.png';
import op from '../logo/8fa7ed6be3a049f2b129c4e9ca3d41b6.webp';
import polygon from '../logo/3cde17744ce9491a9dce0a7434d20c85.png';
import zora from '../logo/zora.png';
import mode from '../logo/mode.jpeg';
import zksyn from '../logo/zksync3.png';
import BNB from '../logo/0588e08e99ff46ac9dfcc4d35cb6e3fa.png';
import twopolygon from '../logo/7ed3f0445cf34603bd4884af5b51acec.png';
import abtrib from '../logo/5e025a633d7b4558bf6c59e18db71012.png';
import scroll from '../logo/scroll.jpeg';

const CardSlider = () => {
  const cardSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CardNextArrow />,
    prevArrow: <CardPrevArrow />
  };
  const cardEco = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <CardNextArrow />,
    prevArrow: <CardPrevArrow />
  };
  const cardNft = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CardNextArrow />,
    prevArrow: <CardPrevArrow />
  };

  return (
    <div className="card-slider">
     
      <h3 className='h3'>Airdrop Opportunities</h3>
      <Slider {...cardSettings}>
        <div className="card-wrapper">
          <Card data={{ image: card1, backgroundColor: '#FF5733', heading: "Heading 1", firstbutton: "Btn 1", secondbutton: "Btn 2", thirdbutton: "Btn 3" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card2, backgroundColor: '#33FF57', heading: "Heading 2", firstbutton: "Btn 4", secondbutton: "Btn 5", thirdbutton: "Btn 6" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card3, backgroundColor: '#3357FF', heading: "Heading 3", firstbutton: "Btn 7", secondbutton: "Btn 8", thirdbutton: "Btn 9" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card4, backgroundColor: '#FF33A1', heading: "Heading 4", firstbutton: "Btn 10", secondbutton: "Btn 11", thirdbutton: "Btn 12" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card5, backgroundColor: '#A133FF', heading: "Heading 5", firstbutton: "Btn 13", secondbutton: "Btn 14", thirdbutton: "Btn 15" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card6, backgroundColor: '#33FFA1', heading: "Heading 6", firstbutton: "Btn 16", secondbutton: "Btn 17", thirdbutton: "Btn 18" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card7, backgroundColor: '#FFA133', heading: "Heading 7", firstbutton: "Btn 19", secondbutton: "Btn 20", thirdbutton: "Btn 21" }} />
        </div>
      </Slider>
      <hr style={{ width: "90%" }} />
      <h3 className='h3'>Buzzing Expeditions</h3>
      <Slider {...cardSettings}>
        <div className="card-wrapper">
          <Card data={{ image: card1, backgroundColor: '#FF5733', heading: "Heading 1", firstbutton: "Btn 1", secondbutton: "Btn 2", thirdbutton: "Btn 3" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card2, backgroundColor: '#33FF57', heading: "Heading 2", firstbutton: "Btn 4", secondbutton: "Btn 5", thirdbutton: "Btn 6" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card3, backgroundColor: '#3357FF', heading: "Heading 3", firstbutton: "Btn 7", secondbutton: "Btn 8", thirdbutton: "Btn 9" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card4, backgroundColor: '#FF33A1', heading: "Heading 4", firstbutton: "Btn 10", secondbutton: "Btn 11", thirdbutton: "Btn 12" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card5, backgroundColor: '#A133FF', heading: "Heading 5", firstbutton: "Btn 13", secondbutton: "Btn 14", thirdbutton: "Btn 15" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card6, backgroundColor: '#33FFA1', heading: "Heading 6", firstbutton: "Btn 16", secondbutton: "Btn 17", thirdbutton: "Btn 18" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card7, backgroundColor: '#FFA133', heading: "Heading 7", firstbutton: "Btn 19", secondbutton: "Btn 20", thirdbutton: "Btn 21" }} />
        </div>
      </Slider>
      <h3 className='h3'>Onchain Streaks</h3>
      <div style={{ display: "flex" }}>
        <div className="card-onchain">
          <Card data={{ image: card5, backgroundColor: '#A133FF', heading: "Heading 5", firstbutton: "Btn 13", secondbutton: "Btn 14", thirdbutton: "Btn 15" }} />
        </div>
        <div className="card-onchain">
          <Card data={{ image: card6, backgroundColor: '#33FFA1', heading: "Heading 6", firstbutton: "Btn 16", secondbutton: "Btn 17", thirdbutton: "Btn 18" }} />
        </div>
        <div className="card-onchain">
          <Card data={{ image: card7, backgroundColor: '#FFA133', heading: "Heading 7", firstbutton: "Btn 19", secondbutton: "Btn 20", thirdbutton: "Btn 21" }} />
        </div>
      </div>
      <hr style={{ width: "90%" }} />
      <h3 className='h3'>Daily New Alpha for You</h3>
      <Slider {...cardSettings}>
        <div className="card-wrapper">
          <Card data={{ image: card1, backgroundColor: '#FF5733', heading: "Heading 1", firstbutton: "Btn 1", secondbutton: "Btn 2", thirdbutton: "Btn 3" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card2, backgroundColor: '#33FF57', heading: "Heading 2", firstbutton: "Btn 4", secondbutton: "Btn 5", thirdbutton: "Btn 6" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card3, backgroundColor: '#3357FF', heading: "Heading 3", firstbutton: "Btn 7", secondbutton: "Btn 8", thirdbutton: "Btn 9" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card4, backgroundColor: '#FF33A1', heading: "Heading 4", firstbutton: "Btn 10", secondbutton: "Btn 11", thirdbutton: "Btn 12" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card5, backgroundColor: '#A133FF', heading: "Heading 5", firstbutton: "Btn 13", secondbutton: "Btn 14", thirdbutton: "Btn 15" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card6, backgroundColor: '#33FFA1', heading: "Heading 6", firstbutton: "Btn 16", secondbutton: "Btn 17", thirdbutton: "Btn 18" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card7, backgroundColor: '#FFA133', heading: "Heading 7", firstbutton: "Btn 19", secondbutton: "Btn 20", thirdbutton: "Btn 21" }} />
        </div>
      </Slider>
      <div className="card-slider">
      <h3 className='h3'>Ecosystem</h3>
      <Slider {...cardEco}>
        <div className="card-eco">
          <EcoCard data={{ image: bitcoin, backgroundColor: '#f5f7f9', name: "bitcoin" }} />
        </div>
        <div className="card-eco">
          <EcoCard data={{ image: Linea, backgroundColor: '#f5f7f9', name: "Linea" }} />
        </div>
        <div className="card-eco">
          <EcoCard data={{ image: Solana, backgroundColor: '#f5f7f9', name: "Solana" }} />
        </div>
        <div className="card-eco">
          <EcoCard data={{ image: base, backgroundColor: '#f5f7f9', name: "Base" }} />
        </div>
        <div className="card-eco">
          <EcoCard data={{ image: blast, backgroundColor: '#f5f7f9', name: "Blast" }} />
        </div>
        <div className="card-eco">
          <EcoCard data={{ image: atom, backgroundColor: '#f5f7f9', name: "Cosmos" }} />
        </div>
        <div className="card-eco">
          <EcoCard data={{ image: op, backgroundColor: '#f5f7f9', name: "Optimism" }} />
        </div>
        <div className="card-eco">
          <EcoCard data={{ image: polygon, backgroundColor: '#f5f7f9', name: "Polygon" }} />
        </div>
        <div className="card-eco">
          <EcoCard data={{ image: zora, backgroundColor: '#f5f7f9', name: "Zora" }} />
        </div>
        <div className="card-eco">
          <EcoCard data={{ image: mode, backgroundColor: '#f5f7f9', name: "Mode" }} />
        </div>
        <div className="card-eco">
          <EcoCard data={{ image: zksyn, backgroundColor: '#f5f7f9', name: "ZKSync" }} />
        </div>
        <div className="card-eco">
          <EcoCard data={{ image: BNB, backgroundColor: '#f5f7f9', name: "BNB" }} />
        </div>
        <div className="card-eco">
          <EcoCard data={{ image: twopolygon, backgroundColor: '#f5f7f9', name: "Polygon 2" }} />
        </div>
        <div className="card-eco">
          <EcoCard data={{ image: abtrib, backgroundColor: '#f5f7f9', name: "Arbitrum" }} />
        </div>
        <div className="card-eco">
          <EcoCard data={{ image: scroll, backgroundColor: '#f5f7f9', name: "Scroll" }} />
        </div>
      </Slider>
    </div>

      <hr style={{width:"90%"}}></hr>
      <h3 className='h3'>Trending Communities</h3>
      <Slider {...cardSettings}>
        <div className="card-wrapper">
          <Card data={{ image: card1, backgroundColor: '#FF5733',  heading: "Heading 1", firstbutton: "Btn 1", secondbutton: "Btn 2", thirdbutton: "Btn 3" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card2, backgroundColor: '#33FF57',  heading: "Heading 2", firstbutton: "Btn 4", secondbutton: "Btn 5", thirdbutton: "Btn 6" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card3, backgroundColor: '#3357FF',  heading: "Heading 3", firstbutton: "Btn 7", secondbutton: "Btn 8", thirdbutton: "Btn 9" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card4, backgroundColor: '#FF33A1',  heading: "Heading 4", firstbutton: "Btn 10", secondbutton: "Btn 11", thirdbutton: "Btn 12" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card5, backgroundColor: '#A133FF',  heading: "Heading 5", firstbutton: "Btn 13", secondbutton: "Btn 14", thirdbutton: "Btn 15" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card6, backgroundColor: '#33FFA1',  heading: "Heading 6", firstbutton: "Btn 16", secondbutton: "Btn 17", thirdbutton: "Btn 18" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card7, backgroundColor: '#FFA133',  heading: "Heading 7", firstbutton: "Btn 19", secondbutton: "Btn 20", thirdbutton: "Btn 21" }} />
        </div>
      </Slider>
      <hr style={{width:"90%"}}></hr>
      <h3 className='h3'>Token Quests</h3>
      <Slider {...cardSettings}>
        <div className="card-wrapper">
          <Card data={{ image: card1, backgroundColor: '#FF5733',  heading: "Heading 1", firstbutton: "Btn 1", secondbutton: "Btn 2", thirdbutton: "Btn 3" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card2, backgroundColor: '#33FF57', heading: "Heading 2", firstbutton: "Btn 4", secondbutton: "Btn 5", thirdbutton: "Btn 6" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card3, backgroundColor: '#3357FF',  heading: "Heading 3", firstbutton: "Btn 7", secondbutton: "Btn 8", thirdbutton: "Btn 9" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card4, backgroundColor: '#FF33A1',  heading: "Heading 4", firstbutton: "Btn 10", secondbutton: "Btn 11", thirdbutton: "Btn 12" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card5, backgroundColor: '#A133FF',  heading: "Heading 5", firstbutton: "Btn 13", secondbutton: "Btn 14", thirdbutton: "Btn 15" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card6, backgroundColor: '#33FFA1',  heading: "Heading 6", firstbutton: "Btn 16", secondbutton: "Btn 17", thirdbutton: "Btn 18" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card7, backgroundColor: '#FFA133', heading: "Heading 7", firstbutton: "Btn 19", secondbutton: "Btn 20", thirdbutton: "Btn 21" }} />
        </div>
      </Slider>
      <hr style={{width:"90%"}}></hr>
      <h3 className='h3'>Learn and Earn</h3>
      <Slider {...cardSettings}>
        <div className="card-wrapper">
          <Card data={{ image: card1, backgroundColor: '#FF5733',  heading: "Heading 1", firstbutton: "Btn 1", secondbutton: "Btn 2", thirdbutton: "Btn 3" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card2, backgroundColor: '#33FF57',  heading: "Heading 2", firstbutton: "Btn 4", secondbutton: "Btn 5", thirdbutton: "Btn 6" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card3, backgroundColor: '#3357FF',  heading: "Heading 3", firstbutton: "Btn 7", secondbutton: "Btn 8", thirdbutton: "Btn 9" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card4, backgroundColor: '#FF33A1',  heading: "Heading 4", firstbutton: "Btn 10", secondbutton: "Btn 11", thirdbutton: "Btn 12" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card5, backgroundColor: '#A133FF',  heading: "Heading 5", firstbutton: "Btn 13", secondbutton: "Btn 14", thirdbutton: "Btn 15" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card6, backgroundColor: '#33FFA1',  heading: "Heading 6", firstbutton: "Btn 16", secondbutton: "Btn 17", thirdbutton: "Btn 18" }} />
        </div>
        <div className="card-wrapper">
          <Card data={{ image: card7, backgroundColor: '#FFA133',  heading: "Heading 7", firstbutton: "Btn 19", secondbutton: "Btn 20", thirdbutton: "Btn 21" }} />
        </div>
      </Slider>
      
      <hr style={{width:"90%"}}></hr>
      <h3 className='h3'>NFT Quests</h3>
      <Slider {...cardNft}>
        <div className="card-nft">
          <Card data={{ image: nft1, heading: "Heading 1", firstbutton: "Btn 1", secondbutton: "Btn 2", thirdbutton: "Btn 3" }} />
        </div>
        <div className="card-nft">
          <Card data={{ image: nft2,   heading: "Heading 2", firstbutton: "Btn 4", secondbutton: "Btn 5", thirdbutton: "Btn 6" }} />
        </div>
        <div className="card-nft">
          <Card data={{ image: nft3,  heading: "Heading 3", firstbutton: "Btn 7", secondbutton: "Btn 8", thirdbutton: "Btn 9" }} />
        </div>
        <div className="card-nft">
          <Card data={{ image: nft4,   heading: "Heading 4", firstbutton: "Btn 10", secondbutton: "Btn 11", thirdbutton: "Btn 12" }} />
        </div>
        <div className="card-nft">
          <Card data={{ image:nft1,  heading: "Heading 5", firstbutton: "Btn 13", secondbutton: "Btn 14", thirdbutton: "Btn 15" }} />
        </div>
        <div className="card-nft">
          <Card data={{ image: nft2,   heading: "Heading 6", firstbutton: "Btn 16", secondbutton: "Btn 17", thirdbutton: "Btn 18" }} />
        </div>
        <div className="card-nft">
          <Card data={{ image: nft4,  heading: "Heading 7", firstbutton: "Btn 19", secondbutton: "Btn 20", thirdbutton: "Btn 21" }} />
        </div>
      </Slider>
      <hr style={{width:"90%"}}></hr>
    </div>
  );
};

const CardNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
};

const CardPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
};

export default CardSlider;
