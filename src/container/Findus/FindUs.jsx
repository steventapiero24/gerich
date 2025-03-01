import React from 'react';

import {SubHeading, MenuItem} from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="contact" />
      <h1 className='headtext__cormorant' style={{ marginBottom: "3rem" }}>Encuentranos</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0'}} >Horario de apertura</p>
        <p className='p__opensans'>Lun - Vie: 10:00 am - 02:00 am</p>
        <p className='p__opensans'>Sab - Dom: 10:00 am - 03:00 am</p>
        <button type='button' className='custom__button' style={{ marginTop: '2rem'}}> Visítanos </button>
      </div>

    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt="imagen findus" />
    </div>
  </div>
);

export default FindUs;
