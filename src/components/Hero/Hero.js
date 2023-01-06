import React from 'react';
// import './Hero.css';
import imgBg from '../../assets/hero.jpg'

const Hero = () => {
    return (
      <div>
        <img src={imgBg} alt="" className="w-100 h-75 z-0" />
        <div className="position-absolute top-50 text-center d-flex justify-content-center w-100 text-primary">
          <div>
            <h3>Best online education service in the world</h3>
            <h1>One Step Ahead In This Season</h1>
            <div className='d-flex justify-content-center gap-3'>
              <button type="button" className="btn btn-primary rounded-0">
                Primary
              </button>
              <button type="button" className="btn btn-secondary rounded-0">
                Secondary
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;