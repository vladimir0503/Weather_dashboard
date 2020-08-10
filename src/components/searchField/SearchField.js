import React from 'react';
import './style.sass';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const id = '225075b520e334f9e85c982e7e61933b';

const addWeatherCard = (data) => {
    return { type: 'ADD_WEATHER', payload: data}
};

const SearchField = () => {

    const [ cityName, setCityName ] = React.useState('');
    const dispatch = useDispatch();

    const handleChange = e => {
        let nextVal = e.currentTarget.value;
        const yratext = /[А-я',':'.!?; ]/;
        if (yratext.test(nextVal)) {
            return;
        };
        setCityName(nextVal);
    }

    const handleSubmit = () => {
        axios.post(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${id}`)
            .then(res => {
                let weatherData = {
                    id: res.data.id,
                    city: cityName,
                    temperature: Math.round(res.data.main.temp - 273),
                    icon: `https://openweathermap.org/img/wn/${res.data.weather[0]['icon']}@2x.png`,
                };
                dispatch(addWeatherCard(weatherData));
            });
    };

    return (
        <div className='searchWeather'>
            <input type="text" value={cityName} onChange={handleChange}></input>
            <button onClick={handleSubmit}>add</button>
            <button onClick={() => setCityName('')}>Clear</button>
        </div>
    )
};

export default SearchField;