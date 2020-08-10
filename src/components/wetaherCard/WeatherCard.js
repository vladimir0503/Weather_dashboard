import React from 'react';
import { useDispatch } from 'react-redux';
import './style.sass';

const deleteWeatherCard = (data) => {
    return { type: 'DELETE_WEATHER', payload: data };
};

const WetaherCard = ({ data }) => {

    const [deleteBtn, setDeleteBtn] = React.useState('none');
    const dispatch = useDispatch();

    return (
        <div onMouseOver={() => setDeleteBtn(null)}
            onMouseOut={() => setDeleteBtn('none')}
            className='wrapper'
        >
            <button style={{ display: deleteBtn }}
                className='deleteBtn'
                onClick={() => dispatch(deleteWeatherCard(data.id))}
            >
                Delete</button>
            <h3 className='city'>{data.city}</h3>
            <p className='temperature'>{data.temperature}&deg;С</p>
            <img className='icon' src={data.icon} alt={data.icon} />
        </div>
    )
};

export default WetaherCard

