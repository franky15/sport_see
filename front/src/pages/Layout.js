import React from 'react';
import {Outlet } from 'react-router-dom';

//importation des composants
import HeaderHozontal from '../components/HeaderHozontal';
import HeaderVertical from '../components/HeaderVertical';

const Layout = () => {
    return (
        <div className='Layout'>
            <HeaderHozontal />

            <div className='Layout__child'>
                <HeaderVertical />
                <Outlet />
            </div>
            
        </div>
    );
};

export default Layout;