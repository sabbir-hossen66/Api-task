import React from 'react';
import Navbar from '../Shared/Navbar';
import Api from './Api';
import Apies from './Apies';
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-center mx-auto text-secondary text-bold text-3xl font-bold p-3'> welcome to our country
            </h2>
            <Api></Api>

        </div>


    );
};

export default Home;