import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import SearchField from './components/searchField/SearchField';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <SearchField />
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
