import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='Error'>
            <p className='Error404'>Error 404</p>
            <p className='ErrorHome'>
                <Link to='/profil'>Retour au Profile</Link>
            </p>
        </div>
    );
};

export default Error;