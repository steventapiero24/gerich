import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="perseguir el mejor sabor" /> 
      <h1 className='app__header-h1'> La clave para la buena cena </h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}> Ofrecer una experiencia gastronómica sofisticada, donde la excelencia en la cocina, el servicio impecable y un ambiente exclusivo se fusionan para deleitar los sentidos y crear momentos inolvidables para nuestros comensales </p>
      <button type='button' className='custom__button'>Explorar menú</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="Imagen bienvenida" />
    </div>
  </div>
);

export default Header;
