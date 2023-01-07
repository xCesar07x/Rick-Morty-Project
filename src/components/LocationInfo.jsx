import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const LocationInfo = ({location}) => {

    const[resident, setResident] = useState({});

    useEffect(() => {
        axios.get(location)
        .then(res => setResident(res.data))
    }, [])

    // console.log(resident)
    return (
        <div className='col'>
            <div className='resident-card'>
            
             <img src={resident.image} alt="" /> <br />
            
             <div className='resident-info'>
             {resident.name} <br />
             <p>Status:</p> {resident.status} <br />
             <p>Origin:</p>{resident.origin?.name} <br />
             <p>Episode appearances:</p>{resident.episode?.length} <br />
             </div>
            
            </div>
        </div>
    );
};

export default LocationInfo;