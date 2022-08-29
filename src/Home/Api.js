import React, { useEffect, useState } from 'react';
import Apies from './Apies';

const Api = () => {
    const [api, setApi] = useState([]);
    useEffect(() => {
        fetch('api.json')
            .then(res => res.json())
            .then(data => setApi(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                api.map(api => <Apies key={api._id} api={api}></Apies>)
            }
        </div>
    );
};

export default Api;
// 