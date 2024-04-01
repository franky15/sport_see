import React from 'react';

//importations des images du dossier images
import yoga from '../images/yoga.png';
import natation from '../images/natation.png';
import musculation from '../images/musculation.png';
import velo from '../images/velo.png';
import copi from '../images/copi.png';

const HeaderVertical = () => {
    return (
        <div className='HeaderVertical'>
            <div className='HeaderVertical__vide'></div>
            <nav>
                <ul className='containerMenu'>
                    <li className='containerMenu__item'><img src={yoga} alt='yoga' /></li>
                    <li className='containerMenu__item'><img src={natation} alt='natation' /></li>
                    <li className='containerMenu__item'><img src={velo} alt='velo' /></li>
                    <li className='containerMenu__item'><img src={musculation} alt='musculation' /></li>
                </ul>
            </nav>
            <div className='HeaderVertical__copi'><img src={copi} alt='copi' /></div>
        </div>
    );
};

export default HeaderVertical;