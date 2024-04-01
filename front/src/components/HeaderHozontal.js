import React from 'react';
import { Link } from "react-router-dom"


//importation des images du dossier images
import logo from '../images/logo.png';

const HeaderHozontal = () => {
    return (
        <div className='HeaderHozontal'>
            <button className='HeaderHozontal__logo'>
                <Link  to="/"> <img src={logo} alt='logo' /></Link> 
            </button>
            <nav>
                <ul className='containerMenu'>
                    <li className='containerMenu__item'><Link to="/">Acceuil</Link></li>
                    <li className='containerMenu__item'><Link to="/profil">Profil</Link></li>
                    <li className='containerMenu__item'><Link to="/reglage">Réglage</Link></li>
                    <li className='containerMenu__item'><Link to="/community">Communauté</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default HeaderHozontal;