import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Api from './Api';
const Home = () => {
    return (
        <div>

            <h2 className='text-center mx-auto text-secondary text-bold text-3xl font-bold p-3'> Welcome to 10 M Data
            </h2>
            <Link to='/chart'><button class="btn btn-outline btn-success text-center mb-3 ml-20">Go to Chart page</button></Link>

            <Api></Api>

            <Footer></Footer>
        </div>


    );
};

export default Home;