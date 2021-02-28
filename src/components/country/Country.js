import React from 'react';

const Country = (props) => {
    const {name,population,flag} = props.country;

    const addedCountry = props.addedCountry;

    const countryStyle = {
        border:"1px solid red",
        margin: '10px',
        padding: '10px', 
    }
    return (
        <div style={countryStyle}>
            <img style={{width:"50px"}} src={flag} alt=""/>
            <h2>This is {name}</h2>
            <p>population: {population}</p>
            <button onClick={()=>addedCountry(props.country)}>Country Add</button>
        </div>
    );
};

export default Country;