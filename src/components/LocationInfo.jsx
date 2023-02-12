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

    let colorDot = '';

    if (resident.status === 'Alive') {
        colorDot = 'green'
    } if (resident.status === 'Dead') {
        colorDot = 'red'
    } if (resident.status === 'unknown'){
        colorDot = 'gray'
    }
        
    

    return (
        <div className='col'>
            <div className='resident-card'>
            
             <img src={resident.image} alt="" /> <br />
              
             <div className='status'>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={colorDot} className="bi bi-circle-fill" viewBox="0 0 16 16"> <circle cx="8" cy="8" r="8"/> </svg>
             <div>
             <p>Status:</p>  {resident.status} 
             </div>
              </div>

             <div className='resident-info'>

             

             <p>Name:</p>{resident.name} <br />
             <p>Origin:</p>{resident.origin?.name} <br />
             <p>Episode appearances:</p>{resident.episode?.length} <br />
             </div>
            
            </div>
        </div>
    );
};

export default LocationInfo;