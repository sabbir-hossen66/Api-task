import React from 'react';
import { Link } from 'react-router-dom';

const Apies = ({ api }) => {
    const { id, name, body, email } = api
    return (
        <div class="card w-96 glass mx-auto justify-center">
            <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
            <div class="card-body">

                <h2 class="card-title">Id: {id}</h2>
                <h2 class="card-title">Name: {name}</h2>
                <p>Email: {email}</p>
                <h2 class="card-title">{body}</h2>
                <div class="card-actions justify-end">
                    <Link to='/blog'> <button class="btn btn-primary">see Blog</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Apies;