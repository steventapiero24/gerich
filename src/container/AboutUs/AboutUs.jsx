import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="imagen fondo g" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>Sobre nosotros</h1>
        <img src={images.spoon} alt="about spoon" className='spoon__img'/>
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      <button type="button" className='custom__button'>Know more</button>
      </div>

      <div className='app__aboutus-content_knife'>
        <img src={images.knife} alt="imagen knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Nuestra historia</h1>
        <img src={images.spoon} alt="about spoon" className='spoon__img'/>
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className='custom__button'>Know more</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
