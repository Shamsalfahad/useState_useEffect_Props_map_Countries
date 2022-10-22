import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country);

    // distruck
    const{area,region,population,name,flags}=props.country;

    return (
        <div className='Country'>
            <h2>Country Name:{name.common}</h2>
            <img src={flags.png} alt="" srcset="" />
            <h2>Country Population:{population}</h2>
            <p><small>Area : {area}</small></p>
            <p><small>Region : {region}</small></p>
           

        </div>
    );
};

export default Country;