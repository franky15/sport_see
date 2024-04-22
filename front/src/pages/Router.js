import React from 'react';
import { Routes, Route } from "react-router-dom";

//importation des composants
import { Home, Community, Profil, Reglage } from './index';

import Layout from './Layout';
import Error from '../_Utils/Error';
//import Error from '../_Utils/Error';

const Router = () => {
    return (
        <Routes>
            <Route  element={<Layout />}>

                <Route path='/' element={<Home />} />
                <Route path='community' element={<Community />} />
                <Route path='profil' element={<Profil />} />
                <Route path='reglage' element={<Reglage />} />
                <Route path='error' element= { <Error/> }/>
                <Route path='*' element= { <Error/> }/>
            </Route>
        </Routes>
    );
};

export default Router;