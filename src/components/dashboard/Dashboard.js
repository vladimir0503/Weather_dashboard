import React from 'react';
import { useSelector } from 'react-redux';
import WetaherCard from '../wetaherCard/WeatherCard';
import './style.sass';

const Dashboard = () => {

    const weatherData = useSelector(state => state.data);
    return (
        <div className='container'>
            {!weatherData.length ? 
            <p className='info'>Dashboard is empty</p> 
            : weatherData.map((card, index) => <WetaherCard key={index} data={card}/>)}
        </div>
    )

};

export default Dashboard