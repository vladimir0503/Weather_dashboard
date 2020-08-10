import { createStore } from 'redux';

const initialState = {
    data: [],
};

const weather = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_WEATHER':
            return { ...state, data: [...state.data, action.payload] };
        case 'DELETE_WEATHER':
            return { ...state, data: state.data.filter(item => item.id !== action.payload) };
        default:
            return state;
    }
};

const store = createStore(weather);

export default store;